import { PrismaClient } from '@/prisma-pjma-db/pjma-db-client';

const globalForPJMADBPrismaClient = globalThis;

export const pjmaDBPrismaClient =
  globalForPJMADBPrismaClient.pjmaDBPrismaClient || new PrismaClient({ log: ['query'] });

if (process.env.NODE_ENV !== 'production') globalForPJMADBPrismaClient.pjmaDBPrismaClient = pjmaDBPrismaClient;
