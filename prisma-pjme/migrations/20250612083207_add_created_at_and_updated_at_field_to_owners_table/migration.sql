/*
  Warnings:

  - Added the required column `created_at` to the `owners` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `owners` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "owners" ADD COLUMN     "created_at" BIGINT NOT NULL,
ADD COLUMN     "updated_at" BIGINT NOT NULL;
