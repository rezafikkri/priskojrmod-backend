/*
  Warnings:

  - Made the column `picture` on table `admins` required. This step will fail if there are existing NULL values in that column.
  - Made the column `phone_number` on table `admins` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "admins" ALTER COLUMN "picture" SET NOT NULL,
ALTER COLUMN "phone_number" SET NOT NULL;
