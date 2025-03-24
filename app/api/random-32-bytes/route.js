import { randomBytes } from 'node:crypto';
import { NextResponse } from 'next/server';

export async function GET() {
  const random = randomBytes(32).toString('hex');
  return NextResponse.json({random});
}
