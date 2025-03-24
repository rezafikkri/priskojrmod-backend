import { z } from 'zod';

export const secretKeySchema = z.object({
  key: z.string().min(32, {
    message: 'Must contain at least 32 characters',
  }),
  app_name: z.string().max(50, {
    message: 'Must contain at most 50 characters',
  }).min(4, {
    message: 'Must contain at least 4 characters',
  }),
});

