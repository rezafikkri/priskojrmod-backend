'use server';

import { createLicense, updateLicense } from '@/lib/services/license-service';

export async function addLicense(data) {
  try {
    await createLicense(data);
    return { status: 'success' };
  } catch (err) {
    return { status: 'error', message: err.message };
  }
}

export async function editLicense(data) {
  try {
    await updateLicense(data);
    return { status: 'success' };
  } catch (err) {
    return { status: 'error', message: err.message };
  }
}
