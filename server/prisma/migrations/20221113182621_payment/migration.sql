-- CreateTable
CREATE TABLE "Paymenthistory" (
    "id" TEXT NOT NULL,
    "paymentamount" INTEGER NOT NULL,
    "buyer" TEXT NOT NULL,
    "coinspurchased" INTEGER NOT NULL,

    CONSTRAINT "Paymenthistory_pkey" PRIMARY KEY ("id")
);
