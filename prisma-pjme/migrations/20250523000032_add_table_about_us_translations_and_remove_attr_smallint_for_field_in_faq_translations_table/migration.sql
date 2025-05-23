/*
  Warnings:

  - You are about to drop the column `content` on the `about_us` table. All the data in the column will be lost.
  - The primary key for the `faq_translations` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- AlterTable
ALTER TABLE "about_us" DROP COLUMN "content";

-- AlterTable
ALTER TABLE "faq_translations" DROP CONSTRAINT "faq_translations_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE INTEGER,
ADD CONSTRAINT "faq_translations_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "faq_translations_id_seq";

-- CreateTable
CREATE TABLE "about_us_translations" (
    "id" SMALLSERIAL NOT NULL,
    "about_us_id" SMALLINT NOT NULL,
    "language" "Language" NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "about_us_translations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "about_us_translations" ADD CONSTRAINT "about_us_translations_about_us_id_fkey" FOREIGN KEY ("about_us_id") REFERENCES "about_us"("id") ON DELETE CASCADE ON UPDATE CASCADE;
