import ValidationError from '../errors/ValidationError';
import { pjmaDBPrismaClient } from '../pjma-prisma-client';
import { secretKeySchema } from '../validators/secret-key-validator';

export async function createSecretKey({
  key,
  app_name,
}) {
  try {
    const parsedData = secretKeySchema.parse({ key, app_name });
    const createdAt = Math.floor(new Date().getTime() / 1000);
    await pjmaDBPrismaClient.SecretKeyLicense.create({
      data: {
        ...parsedData,
        created_at: createdAt,
      },
    });
  } catch (err) {
    if (err.name === 'ZodError') {
      throw new ValidationError();
    }

    console.error(err);
    throw new Error('Something went wrong.');
  }
}
