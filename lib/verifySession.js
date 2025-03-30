import { cache } from 'react';
import { authOptions } from '@/app/api/auth/[...nextauth]/route';
import { getServerSession } from 'next-auth';
import 'server-only';

const verifySession = cache(async () => {
  const session = await getServerSession(authOptions);
  if (!session) {
    return false;
  }

  return { isAuth: true, userId: session.user.id };
});

export default verifySession;
