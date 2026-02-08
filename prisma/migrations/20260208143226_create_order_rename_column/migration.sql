/*
  Warnings:

  - You are about to drop the column `order_id` on the `orders` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[number]` on the table `orders` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `number` to the `orders` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "order_items" DROP CONSTRAINT "order_items_order_id_fkey";

-- DropIndex
DROP INDEX "orders_order_id_key";

-- AlterTable
ALTER TABLE "orders" DROP COLUMN "order_id",
ADD COLUMN     "number" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "orders_number_key" ON "orders"("number");

-- AddForeignKey
ALTER TABLE "order_items" ADD CONSTRAINT "order_items_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "orders"("id") ON DELETE CASCADE ON UPDATE CASCADE;
