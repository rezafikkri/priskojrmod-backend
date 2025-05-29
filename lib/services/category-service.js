import 'server-only';

import pjmeDBPrismaClient from '../pjme-prisma-client';
import verifySession from '../verifySession';
import UnknownError from '../errors/UnknownError';

export async function getCategories() {
  try {
    const categories = await pjmeDBPrismaClient.Category.findMany({
      select: {
        id: true,
        name: true,
        created_at: true,
      },
    });
    return categories.map(category => ({
      ...category,
      created_at: category.created_at.toString(),
    }));
  } catch (err) {
    console.error(err);
    throw new UnknownError();   
  }
}
