import 'server-only';

import { pjmaDBPrismaClient } from '../pjma-prisma-client';
import { secretKeySchema } from '../validators/secret-key-validator';
import { revalidatePath } from 'next/cache';
import NotFoundError from '../errors/NotFoundError';
import verifySession from '../verifySession';
import UnknownError from '../errors/UnknownError';
import { unstable_cache } from 'next/cache';

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
        created_at: BigInt(createdAt),
      },
    });
    // revalidate cache
    revalidatePath('/secret-key');
    return create;
  } catch (err) {
    throw new UnknownError();
  }
}

// get data is 
export const getSecretKeys = unstable_cache(async () => {
  try {
    const secretKeys = await pjmaDBPrismaClient.SecretKeyLicense.findMany();
    return JSON.stringify(
      secretKeys,
      (_, value) => (typeof value === 'bigint' ? value.toString() : value)
    )
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}, { revalidate: 3600 });

export async function deleteSecretKey(id) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    const remove = await pjmaDBPrismaClient.SecretKeyLicense.delete({
      where: { id },
    });
    // revalidate cache
    revalidatePath('/secret-key');
    return remove;
  } catch (err) {
    if (err.name === 'PrismaClientKnownRequestError' && err.code === 'P2025') {
      throw new NotFoundError('Secret Key not found, please reload the page and try again.');
    }

    console.error(err);
    throw new UnknownError();
  }
}
