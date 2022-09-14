/*
  Warnings:

  - Added the required column `designation` to the `Photos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `title` to the `Photos` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Photos" ADD COLUMN     "designation" TEXT NOT NULL,
ADD COLUMN     "title" TEXT NOT NULL;
