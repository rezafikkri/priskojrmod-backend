'use server';

import { createAboutUs, updateAboutUs } from '@/lib/services/about-us-service';

export async function addAboutUs(data) {
  try {
    const createdData = await createAboutUs(data);
    return { status: 'success', data: createdData };
  } catch (err) {
    return { status: 'error', message: err.message };
  }
}

export async function editAboutUs(data) {
  try {
    await updateAboutUs(data);
    return { status: 'success' };
  } catch (err) {
    return { status: 'error', message: err.message };
  }
}
