import jwt from 'jsonwebtoken';
import { faker } from '@faker-js/faker';
import { PrismaClient } from '../prisma-pjma-db/pjma-db-client/index.js';

const prisma = new PrismaClient();
const SECRET = '36b5d3c2f8cf596ffc0bdb8d5ced264f9d6e1728ef61db686414f16aa3007a95'; 

function generateLicenseKeyPayload(email) {
  const expiresAt = new Date();
  expiresAt.setFullYear(expiresAt.getFullYear() + 1);

  return {
    name: faker.person.fullName(),
    email,
    variant_id: '',
    type: 'online',
    exp: Math.floor(expiresAt.getTime() / 1000),
  };
}

function generateJwtKey(payload) {
  return jwt.sign(payload, SECRET);
}

async function main() {
  const secretKeyId = 1n;
  const licenseKeys = [];

  for (let i = 0; i < 24; i++) {
    const email = faker.internet.email().toLowerCase();
    const createdAt = Math.floor(Date.now() / 1000) + 3600 + (i * 2);
    const payload = generateLicenseKeyPayload(email);
    const key = generateJwtKey(payload);

    licenseKeys.push({
      email,
      key,
      secret_key_id: secretKeyId,
      used_for_activate: false,
      used_for_download: false,
      created_at: createdAt,
    });
  }

  await prisma.licenseKey.createMany({
    data: licenseKeys,
  });

  console.log(`✅ Seeded ${licenseKeys.length} license keys`);
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
