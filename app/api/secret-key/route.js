import { NextResponse } from 'next/server';
import { createSecretKey } from '@/lib/services/secret-key-service';

export async function POST(req) {
  try {
    const body = await req.json();
    await createSecretKey(body);

    return NextResponse.json({
      status: 'success',
      message: 'Secret Key successfully created.',
    }, { status: 201 });
  } catch (err) {
    let statusCode = 500;
    if (err.name === 'ValidationError') {
      statusCode = 400;
    }

    return NextResponse.json({
      status: 'error',
      message: err.message
    }, { status: statusCode });
  }
}
