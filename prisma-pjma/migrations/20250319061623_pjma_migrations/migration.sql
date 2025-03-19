-- DropForeignKey
ALTER TABLE "license_key" DROP CONSTRAINT "license_key_secret_key_id_fkey";

-- AddForeignKey
ALTER TABLE "license_key" ADD CONSTRAINT "license_key_secret_key_id_fkey" FOREIGN KEY ("secret_key_id") REFERENCES "secret_key_license"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
