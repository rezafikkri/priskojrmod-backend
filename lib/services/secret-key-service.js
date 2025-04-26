import 'server-only';

import pjmaDBPrismaClient from '../pjma-prisma-client';
import { secretKeySchema } from '../validators/secret-key-validator';
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
    const result = await pjmaDBPrismaClient.SecretKeyLicense.create({
      data: {
        ...parsedData,
        product_id: uuidv7(),
        created_at: BigInt(createdAt),
      },
    });
    result.id = result.id.toString();
    result.created_at = result.created_at.toString();
    return result;
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}

export async function getSecretKeys() {
  try {
    const secretKeys = await pjmaDBPrismaClient.SecretKeyLicense.findMany();
    return secretKeys.map(sk => ({
      ...sk,
      id: sk.id.toString(),
      created_at: sk.created_at.toString(),
    }));
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}

export async function getSpecificSecretKeys(select) { 
  try {
    const secretKeys = await pjmaDBPrismaClient.SecretKeyLicense.findMany({ select });
    return secretKeys.map(sk => ({
      ...sk,
      id: sk.id.toString(),
    }));
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}

export async function getSpecificSecretKey(id, select) {
  try {
    const secretKey = await pjmaDBPrismaClient.SecretKeyLicense.findUnique({
      where: { id: BigInt(id) },
      select,
    });
    if (secretKey.id) {
      secretKey.id = secretKey.id.toString();
    }
    return secretKey;
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}

export async function deleteSecretKey(id) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    const result = await pjmaDBPrismaClient.SecretKeyLicense.delete({
      where: { id: BigInt(id) },
      select: { id: true },
    });
    result.id = result.id.toString();
    return result;
  } catch (err) {
    if (err.name === 'PrismaClientKnownRequestError' && err.code === 'P2025') {
      throw new NotFoundError('Secret Key not found, please reload the page and try again.');
    }

    console.error(err);
    throw new UnknownError();
  }
}
