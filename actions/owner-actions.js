'use server';

import { createOwner } from "@/lib/services/owner-service";

export async function addOwner(data) {
  try {
    await createOwner(data);
    return { status: 'success' };
  } catch (err) {
    return { status: 'error', message: err.message };
  }
}
