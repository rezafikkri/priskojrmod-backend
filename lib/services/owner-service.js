import 'server-only';

import pjmeDBPrismaClient from '../pjme-prisma-client';
import verifySession from '../verifySession';
import UnknownError from '../errors/UnknownError';
import DuplicateError from '../errors/DuplicateError';
import NotFoundError from '../errors/NotFoundError';

export async function getOwners() {
  try {
    const owners = await pjmeDBPrismaClient.Owner.findMany({
      select: {
        id: true,
        first_name: true,
        sm_username: true,
        created_at: true,
        updated_at: true,
      },
      orderBy: { updated_at: 'desc' },
    });
    return owners.map(owner => ({
      ...owner,
      created_at: owner.created_at.toString(),
      updated_at: owner.updated_at.toString(),
    }));
  } catch (err) {
    console.error(err);
    throw new UnknownError();   
  }
}
