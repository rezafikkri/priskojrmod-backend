-- CreateEnum
CREATE TYPE "Language" AS ENUM ('ID', 'EN');

-- CreateTable
CREATE TABLE "faq_translations" (
    "id" UUID NOT NULL,
    "faq_id" UUID NOT NULL,
    "language" "Language" NOT NULL,
    "title" TEXT NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "faq_translations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "faq_translations" ADD CONSTRAINT "faq_translations_faq_id_fkey" FOREIGN KEY ("faq_id") REFERENCES "faqs"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
