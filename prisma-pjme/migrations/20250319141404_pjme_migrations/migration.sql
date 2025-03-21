/*
  Warnings:

  - You are about to drop the column `firstName` on the `admins` table. All the data in the column will be lost.
  - You are about to drop the column `lastName` on the `admins` table. All the data in the column will be lost.
  - You are about to drop the column `phoneNumber` on the `admins` table. All the data in the column will be lost.
  - Added the required column `first_name` to the `admins` table without a default value. This is not possible if the table is not empty.
  - Added the required column `last_name` to the `admins` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phone_number` to the `admins` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "admins" DROP COLUMN "firstName",
DROP COLUMN "lastName",
DROP COLUMN "phoneNumber",
ADD COLUMN     "first_name" VARCHAR(100) NOT NULL,
ADD COLUMN     "last_name" VARCHAR(100) NOT NULL,
ADD COLUMN     "phone_number" VARCHAR(20) NOT NULL;
