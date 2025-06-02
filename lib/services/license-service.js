import 'server-only';

import verifySession from '../verifySession';
import UnknownError from '../errors/UnknownError';
import NotFoundError from '../errors/NotFoundError';
import pjmeDBPrismaClient from '../pjme-prisma-client';
import { mapTranslationsToObject } from '../utils';
import { Language } from '@/constants/enums';
import { createLicenseSchema } from '../validators/license-validator';

export async function createLicense({
  name,
  content,
}) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    const parsedData = createLicenseSchema.parse({ name, content });
    const currentTime = Math.floor(new Date().getTime() / 1000);
    return await pjmeDBPrismaClient.License.create({
      data: {
        created_at: currentTime,
        updated_at: currentTime,
        translations: {
          create: [
            { language: Language.ID, name: parsedData.name.id, content: parsedData.content.id },
            { language: Language.EN, name: parsedData.name.en, content: parsedData.content.en },
          ],
        },
      },
      select: { id: true },
    });
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}

export async function getLicenses(select) {
  try {
    const licenses = await pjmeDBPrismaClient.License.findMany({
      select,
      orderBy: { updated_at: 'desc' },
    });
    return licenses.map(license => ({
      ...license,
      created_at: license.created_at.toString(),
      updated_at: license.updated_at.toString(),
      translations: mapTranslationsToObject(license.translations),
    }));
  } catch (err) {
    console.error(err);
    throw new UnknownError();   
  }
}

// melihat apakah id yang dikirim dari form ketika edit bertipe
// int atau string, kalau string maka perlu menggunakan z.coerce
