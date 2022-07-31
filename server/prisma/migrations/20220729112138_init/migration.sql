/*
  Warnings:

  - You are about to drop the column `address` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `businessname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `designation1` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `designation2` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `facebook` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `instagram` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `partylogo` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `role` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `tagline` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `twitter` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `websiteurl` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `whatsappno` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "address",
DROP COLUMN "businessname",
DROP COLUMN "designation1",
DROP COLUMN "designation2",
DROP COLUMN "facebook",
DROP COLUMN "instagram",
DROP COLUMN "partylogo",
DROP COLUMN "role",
DROP COLUMN "tagline",
DROP COLUMN "twitter",
DROP COLUMN "websiteurl",
DROP COLUMN "whatsappno";

-- CreateTable
CREATE TABLE "BusinessProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "businessname" TEXT NOT NULL,
    "tagline" TEXT NOT NULL,
    "whatsappno" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "websiteurl" TEXT NOT NULL,

    CONSTRAINT "BusinessProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PoliticalProfile" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "partylogo" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "twitter" TEXT NOT NULL,
    "designation1" TEXT NOT NULL,
    "deisgnation2" TEXT NOT NULL,

    CONSTRAINT "PoliticalProfile_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "BusinessProfile" ADD CONSTRAINT "BusinessProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PoliticalProfile" ADD CONSTRAINT "PoliticalProfile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
