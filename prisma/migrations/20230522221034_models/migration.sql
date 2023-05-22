/*
  Warnings:

  - You are about to drop the column `code` on the `video` table. All the data in the column will be lost.
  - Added the required column `brand` to the `device` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "device" ADD COLUMN     "brand" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "video" DROP COLUMN "code";
