'use server';

import { createCategory } from '@/lib/services/category-service';

export async function addCategory(data) {
  try {
    await createCategory(data);
    return { status: 'success' };
  } catch (err) {
    return { status: 'error', message: err.message };
  }
}
