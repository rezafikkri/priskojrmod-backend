'use server';

import { createPrivacyPolicy, updatePrivacyPolicy } from '@/lib/services/privacy-policy-service';

export async function addPrivacyPolicy(data) {
  try {
    const createdData = await createPrivacyPolicy(data);
    return { status: 'success', data: createdData };
  } catch (err) {
    return { status: 'error', message: err.message };
  }
}

export async function editPrivacyPolicy(data) {
  try {
    const updatedData = await updatePrivacyPolicy(data);
    return { status: 'success', data: updatedData };
  } catch (err) {
    return { status: 'error', message: err.message };
  }
}
