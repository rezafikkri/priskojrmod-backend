'use server';

import { createSecretKey, deleteSecretKey } from '@/lib/services/secret-key-service';

export async function addSecretKey(data) {
  try {
    await createSecretKey(data);
    return { status: 'success' };
  } catch (err) {
    return { status: 'error' };
  }
}

export async function removeSecretKey(id) {
  try {
    await deleteSecretKey(id);
    return { status: 'success' };
  } catch (err) {
    return { status: 'error', message: err.message };
  }
}
