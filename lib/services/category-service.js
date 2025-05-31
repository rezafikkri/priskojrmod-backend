import 'server-only';

import pjmeDBPrismaClient from '../pjme-prisma-client';
import verifySession from '../verifySession';
import UnknownError from '../errors/UnknownError';
import { categoryIdSchema, categorySchema } from '../validators/category-validator';
import DuplicateError from '../errors/DuplicateError';
import NotFoundError from '../errors/NotFoundError';

export async function getCategories() {
  try {
    const categories = await pjmeDBPrismaClient.Category.findMany({
      select: {
        id: true,
        name: true,
        created_at: true,
      },
      orderBy: { created_at: 'desc' },
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

export async function createCategory({ name }) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    const parsedData = categorySchema.parse({ name });
    const createdAt = BigInt(Math.floor(new Date().getTime() / 1000));
    const slug = parsedData.name.toLowerCase().replace(/\s/g, '-');
    return await pjmeDBPrismaClient.Category.create({
      data: {
        name: parsedData.name,
        slug,
        created_at: createdAt,
      },
      select: { id: true },
    });
  } catch (err) {
    if (err.name === 'PrismaClientKnownRequestError' && err.code === 'P2002') {
      throw new DuplicateError('Category name already exists.');
    }

    console.error(err);
    throw new UnknownError();   
  }
}

export async function deleteCategory(id) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    const parsedId = categoryIdSchema.parse(id);
    return await pjmeDBPrismaClient.Category.delete({
      where: { id: parsedId },
      select: { id: true },
    });
  } catch (err) {
    if (err.name === 'PrismaClientKnownRequestError' && err.code === 'P2025') {
      throw new NotFoundError('Category not found, please reload the page and try again.');
    }

    console.error(err);
    throw new UnknownError();
  }
}

export async function getCategory(id) {
  const idResult = categoryIdSchema.safeParse(id);
  if(!idResult.success) return null;
  const parsedId = idResult.data;

  try {
    return await pjmeDBPrismaClient.Category.findUnique({
      where: { id: parsedId },
      select: {
        id: true,
        name: true,
      },
    });
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}

export async function updateCategory({
  id,
  name,
}) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    const parsedData = categorySchema.parse({
      id,
      name,
    });
    const slug = parsedData.name.toLowerCase().replace(/\s/g, '-');
    return await pjmeDBPrismaClient.Category.update({
      where: { id: parsedData.id },
      data: {
        name: parsedData.name,
        slug,
      },
      select: { id: true },
    });
  } catch (err) {
     if (err.name === 'PrismaClientKnownRequestError' && err.code === 'P2025') {
      throw new NotFoundError('Category not found.');
    }   

    console.error(err);
    throw new UnknownError();
  }
}
