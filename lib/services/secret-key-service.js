import 'server-only';

import { pjmaDBPrismaClient } from '../pjma-prisma-client';
import { secretKeySchema } from '../validators/secret-key-validator';
import { revalidatePath, unstable_cache } from 'next/cache';
import NotFoundError from '../errors/NotFoundError';
import verifySession from '../verifySession';
import UnknownError from '../errors/UnknownError';
import { v7 as uuidv7 } from 'uuid';

export async function createSecretKey({
  key,
  app_name,
}) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    const parsedData = secretKeySchema.parse({ key, app_name });
    const createdAt = Math.floor(new Date().getTime() / 1000);
    const create = await pjmaDBPrismaClient.SecretKeyLicense.create({
      data: {
        ...parsedData,
        product_id: uuidv7(),
        created_at: BigInt(createdAt),
      },
    });
    // revalidate cache
    revalidatePath('/secret-key');
    revalidatePath('/license-key/create');
    return create;
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}

export async function getSecretKeys() {
  const cacheFn = unstable_cache(async () => {
    try {
      const secretKeys = await pjmaDBPrismaClient.SecretKeyLicense.findMany();
      return JSON.stringify(
        secretKeys,
        (_, value) => (typeof value === 'bigint' ? value.toString() : value)
      );
    } catch (err) {
      console.error(err);
      throw new UnknownError();
    }
  }, { revalidate: 180 });

  const secretKeys = await cacheFn();
  return JSON.parse(secretKeys);
}

export async function getSpecificSecretKeys(select) { 
  const cacheFn = unstable_cache(async (select) => {
    try {
      const secretKeys = await pjmaDBPrismaClient.SecretKeyLicense.findMany({ select });
      return JSON.stringify(
        secretKeys,
        (_, value) => (typeof value === 'bigint' ? value.toString() : value)
      );
    } catch (err) {
      console.error(err);
      throw new UnknownError();
    }
  }, { revalidate: 180 });

  const secretKeys = await cacheFn(select);
  return JSON.parse(secretKeys);
}

export async function getSpecificSecretKey(id, select) {
  try {
    return await pjmaDBPrismaClient.SecretKeyLicense.findUnique({
      where: { id },
      select,
    });
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}

export async function deleteSecretKey(id) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    const remove = await pjmaDBPrismaClient.SecretKeyLicense.delete({
      where: { id },
    });
    // revalidate cache
    revalidatePath('/secret-key');
    revalidatePath('/license-key/create');
    return remove;
  } catch (err) {
    if (err.name === 'PrismaClientKnownRequestError' && err.code === 'P2025') {
      throw new NotFoundError('Secret Key not found, please reload the page and try again.');
    }

    console.error(err);
    throw new UnknownError();
  }
}
