/*
  Warnings:

  - The primary key for the `faq_translations` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The `id` column on the `faq_translations` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - The primary key for the `faqs` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `content` on the `faqs` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `faqs` table. All the data in the column will be lost.
  - The `id` column on the `faqs` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Changed the type of `faq_id` on the `faq_translations` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Added the required column `created_at` to the `faqs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "faq_translations" DROP CONSTRAINT "faq_translations_faq_id_fkey";

-- AlterTable
ALTER TABLE "faq_translations" DROP CONSTRAINT "faq_translations_pkey",
DROP COLUMN "id",
ADD COLUMN     "id" SMALLSERIAL NOT NULL,
DROP COLUMN "faq_id",
ADD COLUMN     "faq_id" INTEGER NOT NULL,
ADD CONSTRAINT "faq_translations_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "faqs" DROP CONSTRAINT "faqs_pkey",
DROP COLUMN "content",
DROP COLUMN "title",
ADD COLUMN     "created_at" BIGINT NOT NULL,
DROP COLUMN "id",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "faqs_pkey" PRIMARY KEY ("id");

-- AddForeignKey
ALTER TABLE "faq_translations" ADD CONSTRAINT "faq_translations_faq_id_fkey" FOREIGN KEY ("faq_id") REFERENCES "faqs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
