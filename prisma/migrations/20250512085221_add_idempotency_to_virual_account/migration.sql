/*
  Warnings:

  - A unique constraint covering the columns `[idempotencyKey]` on the table `VirtualAccount` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `idempotencyKey` to the `VirtualAccount` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "VirtualAccount" ADD COLUMN     "idempotencyKey" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "VirtualAccount_idempotencyKey_key" ON "VirtualAccount"("idempotencyKey");
