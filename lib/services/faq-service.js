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

function mappingTranslationsToObject(translations) {
  let mappedTranslations = {};
  translations.forEach(t => {
    if (t.language === 'ID') {
      mappedTranslations.title = { id: t.title };
    } else {
      mappedTranslations.title = { ...mappedTranslations.title, en: t.title };
    }
  });
  return mappedTranslations;
}

// faqs get data not need to verifySession
export async function getFaqs(select) {
  try {
    const faqs = await pjmeDBPrismaClient.Faq.findMany({
      select,
      orderBy: {
        created_at: 'desc',
      },
    });
    return faqs.map(faq => {
      let newFaq = {
        ...faq,
        created_at: faq.created_at.toString(),
        translations: mappingTranslationsToObject(faq.translations),
      };
      return newFaq;
    });
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}

export default async function deleteFaq(id) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    return await pjmeDBPrismaClient.Faq.delete({
      where: { id },
      select: { id: true },
    });
  } catch (err) {
    if (err.name === 'PrismaClientKnownRequestError' && err.code === 'P2025') {
      throw new NotFoundError('Secret key not found, please reload the page and try again.');
    }

    console.error(err);
    throw new UnknownError();
  }
}
