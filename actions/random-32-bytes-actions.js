'use server';

import { randomBytes } from 'node:crypto';

export default async function random32Bytes() {
  return { random: randomBytes(32).toString('hex') };
}
