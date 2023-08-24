/*
  Warnings:

  - Added the required column `card` to the `devices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `cash` to the `devices` table without a default value. This is not possible if the table is not empty.
  - Added the required column `wallet` to the `devices` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "devices" ADD COLUMN     "card" TEXT NOT NULL,
ADD COLUMN     "cash" TEXT NOT NULL,
ADD COLUMN     "wallet" TEXT NOT NULL;
