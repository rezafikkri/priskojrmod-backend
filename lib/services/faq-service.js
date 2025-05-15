import 'server-only';

import { faqSchema } from '../validators/faq-validator';
import verifySession from '../verifySession';
import UnknownError from '../errors/UnknownError';
import NotFoundError from '../errors/NotFoundError';
import pjmeDBPrismaClient from '../pjme-prisma-client';

export async function createFaq({
  title,
  content,
}) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    const parsedData = faqSchema.parse({ title, content });
    const createdAt = Math.floor(new Date().getTime() / 1000);
    // insert into db
    return await pjmeDBPrismaClient.Faq.create({
      data: {
        created_at: BigInt(createdAt),
        translations: {
          create: [
            { language: 'ID', title: parsedData.title.id, content: parsedData.content.id },
            { language: 'EN', title: parsedData.title.en, content: parsedData.content.en },
          ],
        },
      },
      select: {
        id: true,
      },
    });
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}
