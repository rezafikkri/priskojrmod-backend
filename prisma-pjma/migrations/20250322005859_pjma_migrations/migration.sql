/*
  Warnings:

  - You are about to drop the column `version` on the `secret_key_license` table. All the data in the column will be lost.
  - Added the required column `app_name` to the `secret_key_license` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "secret_key_license" DROP COLUMN "version",
ADD COLUMN     "app_name" VARCHAR(50) NOT NULL;
