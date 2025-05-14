/*
  Warnings:

  - You are about to drop the `faq` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "faq";

-- CreateTable
CREATE TABLE "faqs" (
    "id" UUID NOT NULL,
    "title" VARCHAR(150) NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "faqs_pkey" PRIMARY KEY ("id")
);
