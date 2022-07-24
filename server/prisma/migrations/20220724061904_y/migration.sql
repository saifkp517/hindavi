/*
  Warnings:

  - You are about to drop the column `address` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `businessname` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `facebook` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `instagram` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `partylogo` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `phoneno` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `profileStatus` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `profilephoto` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `tagline` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `twitter` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `websiteUrl` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `whatsappno` on the `User` table. All the data in the column will be lost.
  - You are about to drop the `Photos` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Photos" DROP CONSTRAINT "Photos_userId_fkey";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "address",
DROP COLUMN "businessname",
DROP COLUMN "facebook",
DROP COLUMN "instagram",
DROP COLUMN "partylogo",
DROP COLUMN "phoneno",
DROP COLUMN "profileStatus",
DROP COLUMN "profilephoto",
DROP COLUMN "tagline",
DROP COLUMN "twitter",
DROP COLUMN "websiteUrl",
DROP COLUMN "whatsappno";

-- DropTable
DROP TABLE "Photos";
