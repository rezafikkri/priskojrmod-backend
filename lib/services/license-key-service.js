import 'server-only';

import { pjmaDBPrismaClient } from '../pjma-prisma-client';
import { licenseKeySchema } from '../validators/license-key-validator';
import verifySession from '../verifySession';
import UnknownError from '../errors/UnknownError';
import jwt from 'jsonwebtoken';
import { getSpecificSecretKey } from './secret-key-service';
import DuplicateError from '../errors/DuplicateError';

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
    const iat = Math.floor(new Date().getTime() / 1000);
    const { key: secretKey } = await getSpecificSecretKey(secret_key_id, { key: true });
    const licenseKey = jwt.sign({
      name: parsedData.name,
      email: parsedData.email,
      variant_id: "",
      type: parsedData.type,
      iat
    }, secretKey);

    // insert into db
    return await pjmaDBPrismaClient.LicenseKey.create({
      data: {
        secret_key_id: parsedData.secret_key_id,
        email: parsedData.email,
        key: licenseKey,
      },
    });
  } catch (err) {
    if (err.name === 'PrismaClientKnownRequestError' && err.code === 'P2002') {
      throw new DuplicateError('Email already exists');
    }

    console.error(err);
    throw new UnknownError();
  }
}
