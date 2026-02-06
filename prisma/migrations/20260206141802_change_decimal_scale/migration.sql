/*
  Warnings:

  - You are about to alter the column `price` on the `ingredients` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(10,2)`.
  - You are about to alter the column `quantity` on the `recipe_ingredients` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(8,3)`.
  - You are about to alter the column `rating` on the `recipes` table. The data in that column could be lost. The data in that column will be cast from `Decimal(65,30)` to `Decimal(3,2)`.

*/
-- AlterTable
ALTER TABLE "ingredients" ALTER COLUMN "icon_url" DROP NOT NULL,
ALTER COLUMN "price" DROP NOT NULL,
ALTER COLUMN "price" SET DATA TYPE DECIMAL(10,2);

-- AlterTable
ALTER TABLE "recipe_ingredients" ALTER COLUMN "quantity" SET DATA TYPE DECIMAL(8,3);

-- AlterTable
ALTER TABLE "recipes" ALTER COLUMN "rating" SET DATA TYPE DECIMAL(3,2);
