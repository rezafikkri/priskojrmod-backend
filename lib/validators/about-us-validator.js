import { z } from 'zod';
import { contentCustomSchema } from './base-validator';

export const aboutUsSchema = z.object({
  id: z.number().int().optional(),
  content: {
    id: contentCustomSchema,
    en: contentCustomSchema,
  },
});
