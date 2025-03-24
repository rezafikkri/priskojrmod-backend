/*
  Warnings:

  - A unique constraint covering the columns `[email]` on the table `license_key` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `license_key` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "license_key" ADD COLUMN     "email" VARCHAR(100) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "license_key_email_key" ON "license_key"("email");
