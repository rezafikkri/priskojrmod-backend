import { z } from 'zod';

const licenseKeySchema = z.object({
  secret_key_id: z.string().min(1, {
    message: 'Please select an option.',
  }),
  name: z.string().min(4, {
    message: 'Must contain at least 4 characters.',
  }),
  type: z.enum(['online', 'offline']),
});
 
export const createLicenseKeySchema = licenseKeySchema.extend({
  email: z.string().min(1, {
    message: 'Can\'t be empty.',
  }).email({
    message: 'Please enter a valid format.',
  }),
});

export const editLicenseKeySchema = licenseKeySchema.extend({
  id: z.string().uuid(),
  old_key: z.string().min(100),
  old_secret_key_id: z.string().min(1),
  used_for_activate: z.boolean(),
  used_for_download: z.boolean(),
  change_expiration_date: z.boolean(),
});
