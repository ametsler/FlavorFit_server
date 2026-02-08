/*
  Warnings:

  - Made the column `price` on table `ingredients` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `amount` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ingredients" ALTER COLUMN "price" SET NOT NULL;

-- AlterTable
ALTER TABLE "orders" ADD COLUMN     "amount" DECIMAL(12,2) NOT NULL;
