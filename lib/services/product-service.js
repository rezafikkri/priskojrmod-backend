import 'server-only';

import pjmaDBPrismaClient from '../pjma-prisma-client';
import verifySession from '../verifySession';
import UnknownError from '../errors/UnknownError';
import NotFoundError from '../errors/NotFoundError';
import DuplicateError from '../errors/DuplicateError';
import { createProductSchema } from '../validators/product-validator';
import pjmeDBPrismaClient from '../pjme-prisma-client';
import { Language } from '@/constants/enums';

export async function createProduct({
  name,
  category_id,
  license_id,
  owner_id,
  download_link,
  description,
  variants,
  images,
  discount,
  coupon,
  is_published,
  price_type,
}) {
  const session = await verifySession();
  if (!session) throw new Error('Unauthenticated');

  try {
    const parsedData = createProductSchema.parse({
      name,
      category_id,
      license_id,
      owner_id,
      download_link,
      description,
      variants,
      images,
      discount,
      coupon,
      is_published,
      price_type,
    });
    const currentTime = BigInt(Math.floor(new Date().getTime() / 1000));
    const slug = parsedData.name.toLowerCase().replace(/\s/g, '-');
    let createData = {
      category_id: parsedData.category_id,
      admin_id: session.userId,
      owner_id: parsedData.owner_id,
      license_id: parsedData.license_id,
      name: parsedData.name,
      slug,
      price_type: parsedData.price_type,
      is_published: parsedData.is_published,
      created_at: currentTime,
      released_at: currentTime,
      updated_at: currentTime,
      translations: {
        create: [
          { language: Language.ID, description: parsedData.description.id },
          { language: Language.EN, description: parsedData.description.en },
        ],
      },
      images: {
        create: parsedData.images,
      },
      variants: {
        create: parsedData.variants.map(variant => {
          if (!variant.download_link) {
            delete variant.download_link;
          }
          if (variant.prices) {
            return {
              ...variant,
              prices: {
                create: variant.prices,
              },
            };
          }
          return variant;
        }),
      },
    };

    if (parsedData.download_link) {
      createData.download_link = parsedData.download_link;
    }
    if (parsedData.discount.value) {
      createData.discount = {
        create: {
          discount: parsedData.discount.value,
          expired_at: BigInt(parsedData.discount.expired_at),
        },
      };
    }
    if (parsedData.coupon.code) {
      createData.coupon = {
        create: {
          ...parsedData.coupon,
          expired_at: BigInt(parsedData.coupon.expired_at),
        },
      };
    }

    console.dir(createData, { depth: 10 });
    const result = await pjmeDBPrismaClient.Product.create({
      data: createData,
      select: { id: true },
    });
    return result;
  } catch (err) {
     if (err.name === 'PrismaClientKnownRequestError' && err.code === 'P2002') {
      throw new DuplicateError('Product name already exists.');
    }   

    console.error(err);
    throw new UnknownError();
  }
}
