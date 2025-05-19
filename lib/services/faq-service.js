import 'server-only';

import { editFaqSchema, faqSchema } from '../validators/faq-validator';
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
      if (t.id) mappedTranslations.id = { id: t.id };
      if (t.title) mappedTranslations.id = { ...mappedTranslations.id, title: t.title };
      if (t.content) mappedTranslations.id = { ...mappedTranslations.id, content: t.content };
    } else if (t.language === 'EN') {
      if (t.id) mappedTranslations.en = { id: t.id };
      if (t.title) mappedTranslations.en = { ...mappedTranslations.en, title: t.title };
      if (t.content) mappedTranslations.en = { ...mappedTranslations.en, content: t.content };
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

export async function deleteFaq(id) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    return await pjmeDBPrismaClient.Faq.delete({
      where: { id },
      select: { id: true },
    });
  } catch (err) {
    if (err.name === 'PrismaClientKnownRequestError' && err.code === 'P2025') {
      throw new NotFoundError('FAQ not found, please reload the page and try again.');
    }

    console.error(err);
    throw new UnknownError();
  }
}

export async function getFaq(id) {
  try {
    const faq = await pjmeDBPrismaClient.Faq.findUnique({
      where: { id },
      select: {
        id: true,
        translations: {
          select: {
            id: true,
            language: true,
            title: true,
            content: true,
          },
        },
      },
    });
    // if faq exist
    if (faq) {
      faq.translations = mappingTranslationsToObject(faq.translations);
    }
    return faq;
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}

export async function updateFaq({
  id,
  translationId,
  title,
  content,
}) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    const parsedData = editFaqSchema.parse({
      id,
      translationId,
      title,
      content,
    });
    return await pjmeDBPrismaClient.Faq.update({
      where: { id },
      data: {
        translations: {
          update: [
            {
              data: { title: parsedData.title.id, content: parsedData.content.id },
              where: { id: parsedData.translationId.id },
            },
            {
              data: { title: parsedData.title.en, content: parsedData.content.en },
              where: { id: parsedData.translationId.en },
            }
          ],
        },
      },
      select: { id: true },
    });
  } catch (err) {
    if (err.name === 'PrismaClientKnownRequestError' && err.code === 'P2025') {
      throw new NotFoundError('Unable to update: FAQ has been deleted.');
    }

    console.error(err);
    throw new UnknownError();
  }
}
