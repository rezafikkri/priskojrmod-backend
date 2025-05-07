import { z } from 'zod';

const donationLinksSchema = z.object({
  id: z.number().int().optional(),
  currency_code: z.enum(['IDR','USD']),
  link: z.union([z.string().url({
    message: 'Must be a valid URL.',
  }), z.string().length(0)]),
});

export const accountSettingsSchema = z.object({
  first_name: z.string().min(4, {
    message: 'Must contain at least 4 characters.',
  }).max(100, {
    message: 'Must contain at most 100 characters.',
  }),
  last_name: z.string().min(2, {
    message: 'Must contain at least 2 characters.',
  }).max(100, {
    message: 'Must contain at most 100 characters.',
  }),
  phone_number: z.string({
    message: 'Can\'t be empty.',
  }).regex(/^\+628[1-9][0-9]{7,11}$/, {
    message: 'Please enter a valid phone number.',
  }),
  picture: z.string().url({
    message: 'Must be a valid URL.',
  }),
  donation_links: z.array(donationLinksSchema).min(2).max(2),
});
