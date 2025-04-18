'use server';

import { createLicenseKey, deleteLicenseKey } from '@/lib/services/license-key-service';

export async function addLicenseKey(data) {
  try {
    await createLicenseKey(data);
    return { status: 'success' };
  } catch (err) {
    const errReturn = { status: 'error', message: err.message };
    if (err.name === 'DuplicateError') {
      return { ...errReturn, data: { isField: true } };
    }
    return errReturn;
  }
}

export async function removeLicenseKey(id) {
  try {
    const deleteData = await deleteLicenseKey(id);
    return { status: 'success', data: deleteData };
  } catch (err) {
    return { status: 'error', message: err.message };
  }
}
