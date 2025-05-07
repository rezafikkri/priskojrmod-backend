import 'server-only';
import pjmeDBPrismaClient from '../pjme-prisma-client';
import UnknownError from '../errors/UnknownError';
import verifySession from '../verifySession';
import { accountSettingsSchema } from '../validators/account-settings-validator';

export async function getAccount() {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    const account = await pjmeDBPrismaClient.Admin.findUnique({
      where: { id: session.userId },
      select: {
        last_name: true,
        whatsapp_phone_number: true,
        donation_links: {
          select: {
            id: true,
            currency_code: true,
            link: true,
          },
        },
      },
    });
    account.first_name = session.userName;
    account.email = session.userEmail;
    account.picture = session.userPicture;

    return account;
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}

function generateDonationLinksUpsert({
  id,
  currencyCode,
  link,
}) {
  const data = {
    currency_code: currencyCode,
    link,
  };
  return {
    create: data,
    update: data,
    where: { id: id ?? 0 },
  };
}

export async function updateAccount({
  first_name,
  last_name,
  whatsapp_phone_number,
  picture,
  donation_links,
}) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    const parsedAccountData = accountSettingsSchema.parse({
      first_name,
      last_name,
      whatsapp_phone_number,
      picture,
      donation_links,
    });
    const updateData = {
      first_name: parsedAccountData.first_name,
      last_name: parsedAccountData.last_name,
      whatsapp_phone_number: parsedAccountData.whatsapp_phone_number,
      picture: parsedAccountData.picture,
    };

    // check if donation links need to upsert or not
    if (parsedAccountData.donation_links[0].link !== '') {
      updateData.donation_links = {
        upsert: [generateDonationLinksUpsert({
          id: parsedAccountData.donation_links[0].id,
          currencyCode: parsedAccountData.donation_links[0].currency_code,
          link: parsedAccountData.donation_links[0].link,
        })],
      };
    }
    if (parsedAccountData.donation_links[1].link !== '') {
      updateData.donation_links = {
        upsert: [
          ...updateData.donation_links?.upsert ?? [],
          generateDonationLinksUpsert({
            id: parsedAccountData.donation_links[1].id,
            currencyCode: parsedAccountData.donation_links[1].currency_code,
            link: parsedAccountData.donation_links[1].link,
          }),
        ],
      };
    }

    // update account and upsert donation links if exist
    let selectFields = { id: true };
    if (updateData.donation_links) {
      selectFields = {
        ...selectFields,
        donation_links: {
          select: {
            id: true,
            currency_code: true,
            link: true,
          },
        },
      };
    }
    return await pjmeDBPrismaClient.Admin.update({
      where: { id: session.userId },
      data: updateData,
      select: selectFields,
    });
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}

export async function deleteDonationLink(id) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    return await pjmeDBPrismaClient.DonationLink.delete({
      where: { id, admin_id: session.userId },
      select: { id: true },
    });
  } catch (err) {
    console.error(err);
    throw new UnknownError();
  }
}
