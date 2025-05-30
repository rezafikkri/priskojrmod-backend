import 'server-only';

import pjmaDBPrismaClient from '../pjma-prisma-client';
import { editLicenseKeySchema, createLicenseKeySchema } from '../validators/license-key-validator';
import verifySession from '../verifySession';
import UnknownError from '../errors/UnknownError';
import jwt from 'jsonwebtoken';
import { getSpecificSecretKey } from './secret-key-service';
import NotFoundError from '../errors/NotFoundError';
import isValidUuid from '../is-valid-uuid';

export async function createLicenseKey({
  secret_key_id,
  name,
  email,
  type,
}) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    const parsedData = createLicenseKeySchema.parse({ secret_key_id, name, email, type });
    const createdAt = Math.floor(new Date().getTime() / 1000);

    const expiresAt = new Date();
    expiresAt.setFullYear(expiresAt.getFullYear() + 1);
    const exp = Math.floor(expiresAt.getTime() / 1000);

    const { key: secretKey } = await getSpecificSecretKey(secret_key_id, { key: true });
    const licenseKey = jwt.sign({
      name: parsedData.name,
      email: parsedData.email,
      variant_id: "",
      type: parsedData.type,
      exp,
    }, secretKey);

    // insert into db
    return await pjmaDBPrismaClient.LicenseKey.create({
      data: {
        secret_key_id: BigInt(parsedData.secret_key_id),
        email: parsedData.email,
        key: licenseKey,
        created_at: BigInt(createdAt),
      },
      select: { id: true },
    });
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}

export async function getLicenseKeys({ select, pageIndex, pageSize }) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    const licenseKeys = await pjmaDBPrismaClient.LicenseKey.findMany({
      select,
      orderBy: {
        created_at: 'desc',
      },
      take: pageSize,
      skip: pageSize * pageIndex,
    });
    return licenseKeys.map(lk => ({
      ...lk,
      created_at: lk.created_at.toString(),
    }));
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}

export async function searchLicenseKeys({ select, searchKey, searchLimit }) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

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
    return licenseKeys.map(lk => ({
      ...lk,
      created_at: lk.created_at.toString(),
    }));
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}

export const countLicenseKeys = async () => {
  try {
    return await pjmaDBPrismaClient.LicenseKey.count();
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}

export async function deleteLicenseKey(id) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    return await pjmaDBPrismaClient.LicenseKey.delete({
      where: { id },
      select: { id: true },
    });
  } catch (err) {
    if (err.name === 'PrismaClientKnownRequestError' && err.code === 'P2025') {
      throw new NotFoundError('License Key not found, please reload the page and try again.');
    }

    console.error(err);
    throw new UnknownError();
  }
}

export async function getLicenseKey(id) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  if (!isValidUuid(id)) return null;

  try {
    const licenseKey = await pjmaDBPrismaClient.LicenseKey.findUnique({
      where: {
        id: id,
      },
      select: {
        id: true,
        secret_key_id: true,
        email: true,
        key: true,
        used_for_activate: true,
        used_for_download: true,
      },
    });
    if (licenseKey) {
      // conver bigint to string
      licenseKey.secret_key_id = licenseKey.secret_key_id.toString();
    }
    return licenseKey;
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}

function verifyOrDecodeExpiredToken(key, secretKey) {
  try {
    return jwt.verify(key, secretKey);
  } catch (err) {
    if (err.name !== 'TokenExpiredError') {
      throw err;
    }
    return jwt.decode(key);
  }
}

async function generateNewKey({
  parsedOldKey,
  parsedData,
  oldSecretKey,
  oldSecretKeyId,
}) {
  let secretKey = oldSecretKey;
  if (oldSecretKeyId !== parsedData.secret_key_id) {
    ({ key: secretKey } = await getSpecificSecretKey(parsedData.secret_key_id, { key: true }));
  }

  if (
    (parsedOldKey.name !== parsedData.name || parsedOldKey.type !== parsedData.type)
      && !parsedData.change_expiration_date
  ) {
    return {
      key: jwt.sign(
        {
          name: parsedData.name,
          email: parsedOldKey.email,
          variant_id: "",
          type: parsedData.type,
          exp: parsedOldKey.exp,
        },
        secretKey
      ),
    };
  }

  if (parsedData.change_expiration_date) {
    const expiresAt = new Date();
    expiresAt.setFullYear(expiresAt.getFullYear() + 1);
    const exp = Math.floor(expiresAt.getTime() / 1000);
    const key = jwt.sign(
      {
        name: parsedData.name,
        email: parsedOldKey.email,
        variant_id: "",
        type: parsedData.type,
        exp,
      },
      secretKey,
    );
    return { key, exp };
  }

  if (oldSecretKeyId !== parsedData.secret_key_id) {
    return {
      key: jwt.sign(
        {
          name: parsedData.name,
          email: parsedOldKey.email,
          variant_id: "",
          type: parsedData.type,
          exp: parsedOldKey.exp,
        },
        secretKey,
      ),
    };
  }

  return null;
}

export async function updateLicenseKey({
  id,
  old_key,
  old_secret_key_id,
  secret_key_id,
  name,
  type,
  used_for_activate,
  used_for_download,
  change_expiration_date,
}) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    const parsedData = editLicenseKeySchema.parse({
      id,
      old_key,
      old_secret_key_id,
      secret_key_id,
      name,
      type,
      used_for_activate,
      used_for_download,
      change_expiration_date,
    });

    let updateData = {
      secret_key_id: BigInt(parsedData.secret_key_id),
      used_for_activate: parsedData.used_for_activate,
      used_for_download: parsedData.used_for_download,
    };

    // check if key need to change or not
    const { key: oldSecretKey } = await getSpecificSecretKey(parsedData.old_secret_key_id, { key: true });
    const parsedOldKey = verifyOrDecodeExpiredToken(parsedData.old_key, oldSecretKey);
    const newKey = await generateNewKey({
      parsedOldKey,
      parsedData,
      oldSecretKey,
      oldSecretKeyId: parsedData.old_secret_key_id,
    });
    if (newKey) {
      updateData.key = newKey.key;
    }

    // update license key from db
    const result = await pjmaDBPrismaClient.LicenseKey.update({
      where: {
        id,
      },
      select: {
        key: true,
        secret_key_id: true,
      },
      data: updateData,
    });
    result.secret_key_id = result.secret_key_id.toString();
    if (newKey?.exp) {
      result.exp = newKey.exp;
    }
    return result;
  } catch (err) {
    if (err.name === 'PrismaClientKnownRequestError' && err.code === 'P2025') {
      throw new NotFoundError('License Key not found.');
    }

    console.error(err);
    throw new UnknownError();
  }
}
