/*
  Warnings:

  - A unique constraint covering the columns `[product_id]` on the table `secret_key_license` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `product_id` to the `secret_key_license` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "secret_key_license" ADD COLUMN     "product_id" UUID NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "secret_key_license_product_id_key" ON "secret_key_license"("product_id");
