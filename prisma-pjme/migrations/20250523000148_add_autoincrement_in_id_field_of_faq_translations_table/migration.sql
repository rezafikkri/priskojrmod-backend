-- AlterTable
CREATE SEQUENCE faq_translations_id_seq;
ALTER TABLE "faq_translations" ALTER COLUMN "id" SET DEFAULT nextval('faq_translations_id_seq');
ALTER SEQUENCE faq_translations_id_seq OWNED BY "faq_translations"."id";
