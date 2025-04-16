import jwt from 'jsonwebtoken';
import { faker } from '@faker-js/faker';
import { PrismaClient } from '../prisma-pjma-db/pjma-db-client/index.js';

const prisma = new PrismaClient();
const SECRET = 'bf768ff6a24fe166fc773939cef31ea2942413bb387086892f347a97d508283b'; 

function generateLicenseKeyPayload({ email, iat }) {
  return {
    name: faker.person.fullName(),
    email,
    variant_id: '',
    type: 'online',
    iat,
  };
}

function generateJwtKey(payload) {
  return jwt.sign(payload, SECRET);
}

async function main() {
  const secretKeyIds = [1n, 2n];
  const licenseKeys = [];

  for (let i = 0; i < 24; i++) {
    const email = faker.internet.email().toLowerCase();
    const createdAt = Math.floor(Date.now() / 1000) + 3600 + (i * 2);
    const payload = generateLicenseKeyPayload({ email, iat: createdAt });
    const key = generateJwtKey(payload);

    licenseKeys.push({
      email,
      key,
      secret_key_id: faker.helpers.arrayElement(secretKeyIds),
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
