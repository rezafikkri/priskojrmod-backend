'use server';

import { createFaq } from '@/lib/services/faq-service';

export async function addFaq(data) {
  try {
    await createFaq(data);
    return { status: 'success' };
  } catch (err) {
    return { status: 'error', message: err.message };
  }
}
