import 'server-only';

import { pjmaDBPrismaClient } from '../pjma-prisma-client';
import { secretKeySchema } from '../validators/secret-key-validator';
import { revalidatePath } from 'next/cache';
import NotFoundError from '../errors/NotFoundError';
import verifySession from '../verifySession';
import UnknownError from '../errors/UnknownError';

export async function createSecretKey({
  key,
  app_name,
}) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    const parsedData = secretKeySchema.parse({ key, app_name });
    const createdAt = Math.floor(new Date().getTime() / 1000);
    return await pjmaDBPrismaClient.SecretKeyLicense.create({
      data: {
        ...parsedData,
        created_at: BigInt(createdAt),
      },
    });
    // Invalidate the /secret-key route in the cache
    // revalidatePath('/secret-key');
  } catch (err) {
    throw new UnknownError();
  }
}

export async function getSecretKeys() {
  const session = await verifySession();
  if (!session) return null;

  try {
    return await pjmaDBPrismaClient.SecretKeyLicense.findMany();
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}

export async function deleteSecretKey(id) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    return await pjmaDBPrismaClient.SecretKeyLicense.delete({
      where: { id },
    });
  } catch (err) {
    if (err.name === 'PrismaClientKnownRequestError' && err.code === 'P2025') {
      throw new NotFoundError('Secret Key not found, please reload the page and try again.');
    }

    console.error(err);
    throw new UnknownError();
  }
}
