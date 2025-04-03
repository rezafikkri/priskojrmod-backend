import { z } from 'zod';
 
export const licenseKeySchema = z.object({
  secret_key_id: z.string().min(1, {
    message: 'Please select a secret key!',
  }),
  name: z.string().min(4, {
    message: 'Must contain at least 4 characters',
  }),
  email: z.string().email(),
  type: z.enum(['online', 'offline'], {
    message: 'Please select a type',
  }),
});
