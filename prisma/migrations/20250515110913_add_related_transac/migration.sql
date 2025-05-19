/*
  Warnings:

  - A unique constraint covering the columns `[relatedTransactionId]` on the table `Transaction` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Transaction" ADD COLUMN     "relatedTransactionId" TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_relatedTransactionId_key" ON "Transaction"("relatedTransactionId");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_relatedTransactionId_fkey" FOREIGN KEY ("relatedTransactionId") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE;
