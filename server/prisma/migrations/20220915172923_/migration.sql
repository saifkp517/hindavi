/*
  Warnings:

  - You are about to drop the column `userId` on the `Photos` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Photos" DROP CONSTRAINT "Photos_userId_fkey";

-- AlterTable
ALTER TABLE "Photos" DROP COLUMN "userId";
