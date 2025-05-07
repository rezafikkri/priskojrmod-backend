-- This is an empty migration.
ALTER TABLE admins
  RENAME COLUMN phone_number TO whatsapp_phone_number;
