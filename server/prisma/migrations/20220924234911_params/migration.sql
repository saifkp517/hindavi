-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "profilephoto" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "phoneno" TEXT NOT NULL,
    "coins" INTEGER NOT NULL,
    "verified" BOOLEAN NOT NULL,
    "refcode" TEXT NOT NULL,
    "Token" TEXT,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BusinessProfile" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
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
    "email" TEXT NOT NULL,
    "profilelogo" TEXT NOT NULL,
    "partylogo" TEXT NOT NULL,
    "facebook" TEXT NOT NULL,
    "instagram" TEXT NOT NULL,
    "twitter" TEXT NOT NULL,
    "designation1" TEXT NOT NULL,
    "deisgnation2" TEXT NOT NULL,

    CONSTRAINT "PoliticalProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Photos" (
    "id" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "designation" TEXT NOT NULL,

    CONSTRAINT "Photos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
