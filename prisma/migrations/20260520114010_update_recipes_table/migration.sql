/*
  Warnings:

  - You are about to drop the column `icon_url` on the `ingredients` table. All the data in the column will be lost.
  - You are about to drop the column `unit` on the `ingredients` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[name]` on the table `ingredients` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `unit` to the `recipe_ingredients` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "recipes" DROP CONSTRAINT "recipes_dish_type_id_fkey";

-- DropIndex
DROP INDEX "ingredients_name_unit_key";

-- AlterTable
ALTER TABLE "dish_types" ALTER COLUMN "title" DROP NOT NULL;

-- AlterTable
ALTER TABLE "ingredients" DROP COLUMN "icon_url",
DROP COLUMN "unit",
ADD COLUMN     "image" TEXT,
ALTER COLUMN "price" DROP NOT NULL;

-- AlterTable
ALTER TABLE "recipe_ingredients" ADD COLUMN     "unit" "Unit" NOT NULL,
ALTER COLUMN "quantity" DROP NOT NULL;

-- AlterTable
ALTER TABLE "recipe_steps" ADD COLUMN     "url" TEXT;

-- AlterTable
ALTER TABLE "recipes" ADD COLUMN     "author_name" TEXT,
ADD COLUMN     "image" TEXT,
ADD COLUMN     "source_url" TEXT,
ADD COLUMN     "yield" INTEGER,
ALTER COLUMN "cuisine_type" DROP NOT NULL,
ALTER COLUMN "difficulty" SET DEFAULT 'MEDIUM',
ALTER COLUMN "prep_time" DROP NOT NULL,
ALTER COLUMN "dish_type_id" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ingredients_name_key" ON "ingredients"("name");

-- AddForeignKey
ALTER TABLE "recipes" ADD CONSTRAINT "recipes_dish_type_id_fkey" FOREIGN KEY ("dish_type_id") REFERENCES "dish_types"("id") ON DELETE SET NULL ON UPDATE CASCADE;
