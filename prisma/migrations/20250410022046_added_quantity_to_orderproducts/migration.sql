/*
  Warnings:

  - You are about to drop the column `quantiry` on the `OrderProducts` table. All the data in the column will be lost.
  - Added the required column `quantity` to the `OrderProducts` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "OrderProducts" DROP COLUMN "quantiry",
ADD COLUMN     "quantity" INTEGER NOT NULL;
