/*
  Warnings:

  - You are about to drop the column `heigth` on the `body_measurements` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "body_measurements" DROP COLUMN "heigth",
ADD COLUMN     "height" INTEGER;
