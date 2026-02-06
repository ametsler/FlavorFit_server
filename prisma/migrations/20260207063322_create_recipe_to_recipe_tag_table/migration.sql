/*
  Warnings:

  - You are about to drop the `_RecipeToRecipeTag` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[name,unit]` on the table `ingredients` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "_RecipeToRecipeTag" DROP CONSTRAINT "_RecipeToRecipeTag_A_fkey";

-- DropForeignKey
ALTER TABLE "_RecipeToRecipeTag" DROP CONSTRAINT "_RecipeToRecipeTag_B_fkey";

-- DropTable
DROP TABLE "_RecipeToRecipeTag";

-- CreateTable
CREATE TABLE "recipe_to_recipe_tag" (
    "recipe_id" TEXT NOT NULL,
    "recipe_tag_id" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "recipe_to_recipe_tag_pkey" PRIMARY KEY ("recipe_id","recipe_tag_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ingredients_name_unit_key" ON "ingredients"("name", "unit");

-- AddForeignKey
ALTER TABLE "recipe_to_recipe_tag" ADD CONSTRAINT "recipe_to_recipe_tag_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "recipe_to_recipe_tag" ADD CONSTRAINT "recipe_to_recipe_tag_recipe_tag_id_fkey" FOREIGN KEY ("recipe_tag_id") REFERENCES "recipe_tags"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
