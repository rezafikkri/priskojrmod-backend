import { z } from 'zod';
import { contentCustomSchema } from './base-validator';
import { CurrencyCode } from '@/constants/enums';

export const createProductBasicSchema = z.object({
  name: z
    .string()
    .min(4, {
      message: 'Must contain at least 4 characters',
    })
    .max(150, { message: 'Must contain at most 150 characters' }),
  category_id: z.coerce.number().int().gte(1, {
    message: 'Please select an option',
  }),
  owner_id: z.coerce.number().int().gte(1, {
    message: 'Please select an option',
  }),
  license_id: z.coerce.number().int().gte(1, {
    message: 'Please select an option',
  }),
  download_link: z
    .union([
      z.literal(''),
      z.string()
        .url({ message: 'Must be a valid URL' })
        .max(255, { message: 'Must contain at most 255 characters' })
    ])
    .optional(),
});

export const createProductContentSchema = z.object({
  description: z.object({
    id: contentCustomSchema,
    en: contentCustomSchema,
  }),
});

const numberSchema = z
  .coerce
  .number()
  .int({ message: 'Only whole numbers are allowed' })
  .min(1, { message: 'Minimum value is 1' });

export const createProductImageSchema = z.object({
  url: z
    .string()
    .url({ message: 'Must be a valid URL' })
    .max(255, { message: 'Must contain at most 255 characters' }),
  width: numberSchema,
  height: numberSchema,
  is_thumbnail: z.boolean(),
});

const optionalDiscountSchema = z.union([
  z.literal(''),
  z.coerce.number().int().min(1, { message: 'Minimum value is 1' }),
]);
const optionalExpiredAtSchema = z.union([ z.literal(''), z.date() ]);

export const createProductExtrasClientSchema = z.object({
  variants: z
    .object({
      id: z.string().uuid(),
      name: z
        .string()
        .min(4, { message: 'Must contain at least 4 characters' })
        .max(100, { message: 'Must contain at most 100 characters' }),
      download_link: z
        .union([
          z.literal(''),
          z.string()
            .url({ message: 'Must be a valid URL' })
            .max(255, { message: 'Must contain at most 255 characters' })
        ])
        .optional(),
    })
    .array()
    .min(1),
  images: createProductImageSchema.array().min(1, { message: 'At least one image is required' }),
  discount: z
    .object({
      value: optionalDiscountSchema,
      expired_at: optionalExpiredAtSchema,
    })
    .optional(),
  coupon: z
    .object({
      code: z.union([ 
        z.literal(''),
        z
          .string()
          .min(2, { message: 'Must contain at least 2 characters' })
          .max(150, { message: 'Must contain at most 150 characters' }),
      ]),
      discount: optionalDiscountSchema,
      expired_at: optionalExpiredAtSchema,
    })
    .optional(),
});

export const createProductPricingClientSchema = z.object({
  price_type: z.enum(['free', 'paid'], { message: 'Please select an option' }),
  prices: z
    .object({
      variantId: z.string(),
      variantName: z.string(),
      price: numberSchema,
      currency_code: z.enum([CurrencyCode.IDR, CurrencyCode.USD]),
    })
    .array()
    .optional(),
  is_published: z.boolean(),
});
