import 'server-only';

import pjmaDBPrismaClient from '../pjma-prisma-client';
import { secretKeyIdSchema, createSecretKeySchema, regenerateSecretKeySchema } from '../validators/secret-key-validator';
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
    const parsedData = createSecretKeySchema.parse({ key, app_name });
    const createdAt = Math.floor(new Date().getTime() / 1000);
    const result = await pjmaDBPrismaClient.SecretKeyLicense.create({
      data: {
        ...parsedData,
        product_id: uuidv7(),
        created_at: BigInt(createdAt),
      },
      select: { id: true },
    });
    result.id = result.id.toString();
    return result;
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}

export async function getSecretKeys(select) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    const secretKeys = await pjmaDBPrismaClient.SecretKeyLicense.findMany({
      select,
      orderBy: { created_at: 'desc' },
    });
    return secretKeys.map(sk => {
      let newSK = {
        ...sk,
        id: sk.id.toString(),
      };
      if (sk.created_at) {
        newSK.created_at = sk.created_at.toString();
      }
      return newSK;
    });
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}

/**
 * Used internally by services. Assumes `id` has already been validated.
 */
export async function getSpecificSecretKey(id, select) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

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

/**
 * Public usage. Validates `id` using Zod schema before querying.
 */
export async function getSecretKey(id) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  const idResult = secretKeyIdSchema.safeParse(id);
  if (!idResult.success) return null;
  const parsedId = idResult.data;

  try {
    const secretKey = await pjmaDBPrismaClient.SecretKeyLicense.findUnique({
      where: { id: parsedId },
      select: {
        id: true,
        app_name: true,
        key: true,
      },
    });
    if (secretKey) {
      secretKey.id.toString();
    }
    return secretKey;
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}

export async function saveRegeneratedSecretKey({
  id,
  key,
}) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    const parsedData = regenerateSecretKeySchema.parse({
      id,
      key,
    });
    return await pjmaDBPrismaClient.SecretKeyLicense.update({
      where: { id: parsedData.id },
      data: {
        key: parsedData.key,
        regenerated_at: BigInt(Math.floor(new Date().getTime() / 1000)),
      },
      select: { key: true },
    });
  } catch (err) {
     if (err.name === 'PrismaClientKnownRequestError' && err.code === 'P2025') {
      throw new NotFoundError('Secret key not found.');
    }

    console.error(err);
    throw new UnknownError();   
  }
}

export async function deleteSecretKey(id) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    const parsedId = secretKeyIdSchema.parse(id);
    const result = await pjmaDBPrismaClient.SecretKeyLicense.delete({
      where: { id: parsedId },
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
