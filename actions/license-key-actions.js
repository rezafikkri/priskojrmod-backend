'use server';

import { createLicenseKey } from '@/lib/services/license-key-service';

export async function addLicenseKey(data) {
  try {
    await createLicenseKey(data);
    return { status: 'success' };
  } catch (err) {
    const errReturn = { status: 'error', message: err.message };
    if (err.name === 'DuplicateError') {
      return { ...errReturn, isField: true };
    }
    return errReturn;
  }
}
