-- CreateEnum
CREATE TYPE "Role" AS ENUM ('Businessuser', 'Politicaluser');

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "profilephoto" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "role" "Role",
    "businessname" TEXT,
    "tagline" TEXT,
    "whatsappno" TEXT,
    "address" TEXT,
    "websiteurl" TEXT,
    "partylogo" TEXT,
    "facebook" TEXT,
    "instagram" TEXT,
    "twitter" TEXT,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneno" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photos" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "image" TEXT NOT NULL,

    CONSTRAINT "Photos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- AddForeignKey
ALTER TABLE "Photos" ADD CONSTRAINT "Photos_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("email") ON DELETE RESTRICT ON UPDATE CASCADE;
