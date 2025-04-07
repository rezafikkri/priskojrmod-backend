import 'server-only';

import { pjmaDBPrismaClient } from '../pjma-prisma-client';
import { licenseKeySchema } from '../validators/license-key-validator';
import verifySession from '../verifySession';
import UnknownError from '../errors/UnknownError';
import jwt from 'jsonwebtoken';
import { getSpecificSecretKey } from './secret-key-service';
import DuplicateError from '../errors/DuplicateError';
import { revalidateTag, unstable_cache } from 'next/cache';
import { bigIntJsonReplacer } from '../utils';

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
    revalidateTag('tag:licenseKey');
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

  const cacheFn = unstable_cache(async (pageIndex, pageSize) => {
    try {
      const licenseKeys = await pjmaDBPrismaClient.LicenseKey.findMany({
        select,
        orderBy: {
          created_at: 'desc',
        },
        take: pageSize,
        skip: pageSize * pageIndex,
      });
      const rowCount = await pjmaDBPrismaClient.LicenseKey.count();
      return JSON.stringify({ licenseKeys, rowCount }, bigIntJsonReplacer);
    } catch (err) {
      console.error(err);
      throw new UnknownError();
    }
  }, ['id:licenseKey'], { revalidate: 180, tags: ['tag:licenseKey'] });

  const licenseKey = await cacheFn(pageIndex, pageSize);
  return JSON.parse(licenseKey);
}
