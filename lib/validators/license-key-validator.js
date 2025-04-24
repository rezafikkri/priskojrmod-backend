import { z } from 'zod';

const schemaObject = {
  secret_key_id: z.string().min(1, {
    message: 'Please select a secret key.',
  }),
  name: z.string().min(4, {
    message: 'Must contain at least 4 characters.',
  }),
  type: z.enum(['online', 'offline']),
};
 
export const licenseKeySchema = z.object({
  ...schemaObject,
  email: z.string().min(1, {
    message: 'Email is required.',
  }).email({
    message: 'Invalid email.',
  }),
});

export const licenseKeyEditSchema = z.object({
  ...schemaObject,
  id: z.string().uuid(),
  old_key: z.string().min(100),
  old_secret_key_id: z.string().min(1),
  used_for_activate: z.boolean(),
  used_for_download: z.boolean(),
  change_expiration_date: z.boolean(),
});
