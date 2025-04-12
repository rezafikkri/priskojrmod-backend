import { PrismaClient } from '@/prisma-pjma-db/pjma-db-client';

const globalForPJMADBPrismaClient = globalThis;

const pjmaDBPrismaClient =
  globalForPJMADBPrismaClient.pjmaDBPrismaClient || new PrismaClient({ log: ['query', 'error', 'warn'] });

if (process.env.NODE_ENV !== 'production') globalForPJMADBPrismaClient.pjmaDBPrismaClient = pjmaDBPrismaClient;

export default pjmaDBPrismaClient;
