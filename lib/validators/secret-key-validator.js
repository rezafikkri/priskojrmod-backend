import { z } from 'zod';

export const createSecretKeySchema = z.object({
  key: z.string().min(64, {
    message: 'Must contain at least 64 characters.',
  }).max(100, {
    message: 'Must contain at most 100 characters.'
  }),
  app_name: z.string().max(50, {
    message: 'Must contain at most 50 characters.',
  }).min(4, {
    message: 'Must contain at least 4 characters.',
  }),
});

export const secretKeyIdSchema = z.coerce.bigint();
