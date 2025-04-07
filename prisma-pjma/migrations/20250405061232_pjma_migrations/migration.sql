/*
  Warnings:

  - You are about to drop the `license_key` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `secret_key_license` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "license_key" DROP CONSTRAINT "license_key_secret_key_id_fkey";

-- DropTable
DROP TABLE "license_key";

-- DropTable
DROP TABLE "secret_key_license";

-- CreateTable
CREATE TABLE "secret_key_licenses" (
    "id" BIGSERIAL NOT NULL,
    "product_id" UUID NOT NULL,
    "key" VARCHAR(100) NOT NULL,
    "created_at" BIGINT NOT NULL,
    "app_name" VARCHAR(50) NOT NULL,

    CONSTRAINT "secret_key_licenses_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "license_keys" (
    "id" UUID NOT NULL,
    "secret_key_id" BIGINT NOT NULL,
    "email" VARCHAR(100) NOT NULL,
    "key" TEXT NOT NULL,
    "used_for_activate" BOOLEAN NOT NULL DEFAULT false,
    "used_for_download" BOOLEAN NOT NULL DEFAULT false,
    "created_at" BIGINT NOT NULL,

    CONSTRAINT "license_keys_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "secret_key_licenses_product_id_key" ON "secret_key_licenses"("product_id");

-- CreateIndex
CREATE UNIQUE INDEX "license_keys_email_key" ON "license_keys"("email");

-- AddForeignKey
ALTER TABLE "license_keys" ADD CONSTRAINT "license_keys_secret_key_id_fkey" FOREIGN KEY ("secret_key_id") REFERENCES "secret_key_licenses"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
