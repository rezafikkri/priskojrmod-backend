import 'server-only';

import pjmaDBPrismaClient from '../pjma-prisma-client';
import { licenseKeySchema } from '../validators/license-key-validator';
import verifySession from '../verifySession';
import UnknownError from '../errors/UnknownError';
import jwt from 'jsonwebtoken';
import { getSpecificSecretKey } from './secret-key-service';
import DuplicateError from '../errors/DuplicateError';
import { revalidateTag, unstable_cache } from 'next/cache';
import { bigIntJsonReplacer } from '../utils';
import NotFoundError from '../errors/NotFoundError';

export async function createLicenseKey({
  secret_key_id,
  name,
  email,
  type,
}) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    const parsedData = licenseKeySchema.parse({ secret_key_id, name, email, type });
    const createdAt = Math.floor(new Date().getTime() / 1000);
    const iat = createdAt;
    const { key: secretKey } = await getSpecificSecretKey(secret_key_id, { key: true });
    const licenseKey = jwt.sign({
      name: parsedData.name,
      email: parsedData.email,
      variant_id: "",
      type: parsedData.type,
      iat
    }, secretKey);

    // insert into db
    const create = await pjmaDBPrismaClient.LicenseKey.create({
      data: {
        secret_key_id: parsedData.secret_key_id,
        email: parsedData.email,
        key: licenseKey,
        created_at: createdAt,
      },
    });
    // revalidate cache
    revalidateTag('tag:licenseKeys');
    revalidateTag('tag:countLicenseKeys');
    revalidateTag('tag:searchLicenseKeys');
    return create;
  } catch (err) {
    if (err.name === 'PrismaClientKnownRequestError' && err.code === 'P2002') {
      throw new DuplicateError('Email already exists');
    }

    console.error(err);
    throw new UnknownError();
  }
}

export async function getLicenseKeys({ select, pageIndex, pageSize }) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  const cacheFn = unstable_cache(async (select, pageIndex, pageSize) => {
    try {
      const licenseKeys = await pjmaDBPrismaClient.LicenseKey.findMany({
        select,
        orderBy: {
          created_at: 'desc',
        },
        take: pageSize,
        skip: pageSize * pageIndex,
      });
      return JSON.stringify(licenseKeys, bigIntJsonReplacer);
    } catch (err) {
      console.error(err);
      throw new UnknownError();
    }
  }, ['id:licenseKeys'], { revalidate: 180, tags: ['tag:licenseKeys'] });

  const licenseKeys = await cacheFn(select, pageIndex, pageSize);
  return JSON.parse(licenseKeys);
}

export async function searchLicenseKeys({ select, searchKey, searchLimit }) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  const cacheFn = unstable_cache(async (select, searchKey, searchLimit) => {
    try {
      const licenseKeys = await pjmaDBPrismaClient.LicenseKey.findMany({
        select,
        where: {
          email: {
            startsWith: searchKey,
            mode: 'insensitive',
          },
        },
        take: searchLimit + 1,
      });
      return JSON.stringify(licenseKeys, bigIntJsonReplacer);
    } catch (err) {
      console.error(err);
      throw new UnknownError();
    }
  }, ['id:searchLicenseKeys'], { revalidate: 180, tags: ['tag:searchLicenseKeys'] });

  const licenseKeys = await cacheFn(select, searchKey, searchLimit);
  return JSON.parse(licenseKeys);
}

export const countLicenseKeys = unstable_cache(async () => {
  try {
    return await pjmaDBPrismaClient.LicenseKey.count();
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}, ['id:countLicenseKeys'], { revalidate: 180, tags: ['tag:countLicenseKeys'] });

export async function deleteLicenseKey(id) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    const remove = await pjmaDBPrismaClient.LicenseKey.delete({
      where: { id },
      select: {
        id: true,
        email: true,
      },
    });
    // revalidate cache
    revalidateTag('tag:licenseKeys');
    revalidateTag('tag:countLicenseKeys');
    revalidateTag('tag:searchLicenseKeys');
    return remove;
  } catch (err) {
    if (err.name === 'PrismaClientKnownRequestError' && err.code === 'P2025') {
      throw new NotFoundError('License Key not found, please reload the page and try again.');
    }

    console.error(err);
    throw new UnknownError();
  }
}
