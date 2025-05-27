/*
  Warnings:

  - You are about to drop the column `content` on the `privacy_policy` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "privacy_policy" DROP COLUMN "content";

-- CreateTable
CREATE TABLE "privacy_policy_translations" (
    "id" SMALLSERIAL NOT NULL,
    "privacy_policy_id" SMALLINT NOT NULL,
    "language" "language" NOT NULL,
    "content" TEXT NOT NULL,

    CONSTRAINT "privacy_policy_translations_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "privacy_policy_translations" ADD CONSTRAINT "privacy_policy_translations_privacy_policy_id_fkey" FOREIGN KEY ("privacy_policy_id") REFERENCES "privacy_policy"("id") ON DELETE CASCADE ON UPDATE CASCADE;
