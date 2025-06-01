'use server';

import { createLicense } from '@/lib/services/license-service';

export async function addLicense(data) {
  try {
    await createLicense(data);
    return { status: 'success' };
  } catch (err) {
    return { status: 'error', message: err.message };
  }
}
