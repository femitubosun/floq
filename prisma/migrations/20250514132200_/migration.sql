/*
  Warnings:

  - A unique constraint covering the columns `[fxSnapshotId]` on the table `Transaction` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "FxProvider" AS ENUM ('CBN', 'OPENEXCHANGERATES');

-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "fxSnapshotId" TEXT;

-- CreateTable
CREATE TABLE "FxSnapshot" (
    "id" TEXT NOT NULL,
    "baseCurrency" "Currency" NOT NULL,
    "quoteCurrency" "Currency" NOT NULL,
    "rate" DECIMAL(65,30) NOT NULL,
    "timestamp" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "provider" "FxProvider" NOT NULL,
    "transactionId" TEXT NOT NULL,

    CONSTRAINT "FxSnapshot_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "FxSnapshot_transactionId_key" ON "FxSnapshot"("transactionId");

-- CreateIndex
CREATE INDEX "FxSnapshot_baseCurrency_quoteCurrency_timestamp_idx" ON "FxSnapshot"("baseCurrency", "quoteCurrency", "timestamp");

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_fxSnapshotId_key" ON "Transaction"("fxSnapshotId");

-- AddForeignKey
ALTER TABLE "FxSnapshot" ADD CONSTRAINT "FxSnapshot_transactionId_fkey" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;
