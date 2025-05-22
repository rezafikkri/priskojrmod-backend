'use server';

import {
  createFaq,
  deleteFaq,
  updateFaq,
} from '@/lib/services/faq-service';

export async function addFaq(data) {
  try {
    await createFaq(data);
    return { status: 'success' };
  } catch (err) {
    return { status: 'error', message: err.message };
  }
}

export async function removeFaq(id) {
  try {
    await deleteFaq(id);
    return { status: 'success' };
  } catch (err) {
    return { status: 'error', message: err.message };
  }
}

export async function editFaq(data) {
  try {
    await updateFaq(data);
    return { status: 'success' };
  } catch (err) {
    return { status: 'error', message: err.message };
  }
}
