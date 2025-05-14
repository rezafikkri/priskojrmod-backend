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
    // insert into db
    const result = pjmeDBPrismaClient.faq.create({
      data: {},
    });
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}
