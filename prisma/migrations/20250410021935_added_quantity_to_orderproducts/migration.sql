/*
  Warnings:

  - Added the required column `quantiry` to the `OrderProducts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderProducts" ADD COLUMN     "quantiry" INTEGER NOT NULL;
