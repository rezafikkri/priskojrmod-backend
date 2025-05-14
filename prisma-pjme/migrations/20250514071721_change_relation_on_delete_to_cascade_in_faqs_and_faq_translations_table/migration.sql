-- DropForeignKey
ALTER TABLE "faq_translations" DROP CONSTRAINT "faq_translations_faq_id_fkey";

-- AddForeignKey
ALTER TABLE "faq_translations" ADD CONSTRAINT "faq_translations_faq_id_fkey" FOREIGN KEY ("faq_id") REFERENCES "faqs"("id") ON DELETE CASCADE ON UPDATE CASCADE;
