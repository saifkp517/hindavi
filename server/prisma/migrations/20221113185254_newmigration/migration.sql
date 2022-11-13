-- CreateTable
CREATE TABLE "Purchasehistory" (
    "id" TEXT NOT NULL,
    "buyer" TEXT NOT NULL,
    "imageid" TEXT NOT NULL,
    "price" INTEGER NOT NULL,

    CONSTRAINT "Purchasehistory_pkey" PRIMARY KEY ("id")
);
