import 'server-only';

import pjmaDBPrismaClient from '../pjma-prisma-client';
import { licenseKeyEditSchema, licenseKeySchema } from '../validators/license-key-validator';
import verifySession from '../verifySession';
import UnknownError from '../errors/UnknownError';
import jwt from 'jsonwebtoken';
import { getSpecificSecretKey } from './secret-key-service';
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
    const result = await pjmaDBPrismaClient.LicenseKey.create({
      data: {
        secret_key_id: BigInt(parsedData.secret_key_id),
        email: parsedData.email,
        key: licenseKey,
        created_at: BigInt(createdAt),
      },
    });
    result.secret_key_id = result.secret_key_id.toString();
    result.created_at = result.created_at.toString();
    return result;
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
      select: {
        id: true,
        email: true,
      },
    });
  } catch (err) {
    if (err.name === 'PrismaClientKnownRequestError' && err.code === 'P2025') {
      throw new NotFoundError('License key not found, please reload the page and try again.');
    }

    console.error(err);
    throw new UnknownError();
  }
}

export async function getLicenseKey(id) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

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
    // conver bigint to string
    licenseKey.secret_key_id = licenseKey.secret_key_id.toString();
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
  parsedUserData,
  oldSecretKey,
  oldSecretKeyId,
}) {
  let secretKey = oldSecretKey;
  if (oldSecretKeyId !== parsedUserData.secret_key_id) {
    ({ key: secretKey } = await getSpecificSecretKey(parsedUserData.secret_key_id, { key: true }));
  }

  if (
    (parsedOldKey.name !== parsedUserData.name || parsedOldKey.type !== parsedUserData.type)
      && !parsedUserData.change_expiration_date
  ) {
    return {
      key: jwt.sign(
        {
          name: parsedUserData.name,
          email: parsedOldKey.email,
          variant_id: "",
          type: parsedUserData.type,
          exp: parsedOldKey.exp,
        },
        secretKey
      ),
    };
  }

  if (parsedUserData.change_expiration_date) {
    const expiresAt = new Date();
    expiresAt.setFullYear(expiresAt.getFullYear() + 1);
    const exp = Math.floor(expiresAt.getTime() / 1000);
    const key = jwt.sign(
      {
        name: parsedUserData.name,
        email: parsedOldKey.email,
        variant_id: "",
        type: parsedUserData.type,
        exp,
      },
      secretKey,
    );
    return { key, exp };
  }

  if (oldSecretKeyId !== parsedUserData.secret_key_id) {
    return {
      key: jwt.sign(
        {
          name: parsedUserData.name,
          email: parsedOldKey.email,
          variant_id: "",
          type: parsedUserData.type,
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
    const parsedUserData = licenseKeyEditSchema.parse({
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
      secret_key_id: BigInt(parsedUserData.secret_key_id),
      used_for_activate: parsedUserData.used_for_activate,
      used_for_download: parsedUserData.used_for_download,
    };

    // check if key need to change or not
    const { key: oldSecretKey } = await getSpecificSecretKey(old_secret_key_id, { key: true });
    const parsedOldKey = verifyOrDecodeExpiredToken(old_key, oldSecretKey);
    const newKey = await generateNewKey({
      parsedOldKey,
      parsedUserData,
      oldSecretKey,
      oldSecretKeyId: old_secret_key_id,
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
    console.error(err);
    throw new UnknownError();
  }
}
