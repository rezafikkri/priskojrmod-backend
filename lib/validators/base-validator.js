import { z } from 'zod';

export const contentCustomSchema = z.intersection(
  z.string().min(1, { message: 'Can\'t be empty.' }),
  z.custom((val) => {
    if (val !== '<p></p>') return true;
    return false
  }, {
    message: 'Can\'t be empty.',
  }),
);
