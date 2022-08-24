/*
  Warnings:

  - You are about to drop the column `profilepic` on the `User` table. All the data in the column will be lost.
  - Added the required column `profilephoto` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "User" DROP COLUMN "profilepic",
ADD COLUMN     "profilephoto" TEXT NOT NULL;
