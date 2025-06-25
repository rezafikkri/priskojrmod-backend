'use server';

import { createProduct } from '@/lib/services/product-service';

export async function addProduct(data) {
  try {
    await createProduct(data);
    return { status: 'success' };
  } catch (err) {
    return { status: 'error', message: err.message };
  }
}
