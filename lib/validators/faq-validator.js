import { z } from 'zod';

const contentCustomSchema = z.intersection(
  z.string().min(1, { message: 'Can\'t be empty.' }),
  z.custom((val) => {
    if (val !== '<p></p>') return true;
    return false
  }, {
    message: 'Can\'t be empty.',
  }),
);

export const faqSchema = z.object({
  title: z.object({
    id: z.string().min(4, {
      message: 'Must contain at least 4 characters.',
    }).max(150, {
      message: 'Must contain at most 150 characters.',
    }),
    en: z.string().min(4, {
      message: 'Must contain at least 4 characters.',
    }).max(150, {
      message: 'Must contain at most 150 characters.',
    }),
  }),
  content: z.object({
    id: contentCustomSchema,
    en: contentCustomSchema,
  }),
});
