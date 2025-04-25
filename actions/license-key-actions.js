'use server';

import { createLicenseKey, deleteLicenseKey, updateLicenseKey } from '@/lib/services/license-key-service';

export async function addLicenseKey(data) {
  try {
    await createLicenseKey(data);
    return { status: 'success' };
  } catch (err) {
    return { status: 'error', message: err.message };
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

export async function editLicenseKey(data) {
  try {
    const updatedData = await updateLicenseKey(data);
    return { status: 'success', data: updatedData };
  } catch (err) {
    return { status: 'error', message: err.message };
  }
}
