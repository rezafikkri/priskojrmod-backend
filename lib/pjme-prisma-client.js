import { PrismaClient } from '@/prisma-pjme-db/pjme-db-client';

const globalForPJMEDBPrismaClient = global;

const pjmeDBPrismaClient =
  globalForPJMEDBPrismaClient.pjmeDBPrismaClient || new PrismaClient();

if (process.env.NODE_ENV !== 'production') globalForPJMEDBPrismaClient.pjmeDBPrismaClient = pjmeDBPrismaClient;

export default pjmeDBPrismaClient;
