-- DropForeignKey
ALTER TABLE "recipe_views" DROP CONSTRAINT "recipe_views_user_id_fkey";

-- DropIndex
DROP INDEX "recipe_views_recipe_id_user_id_key";

-- AlterTable
ALTER TABLE "recipe_views" ALTER COLUMN "user_id" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "recipe_views" ADD CONSTRAINT "recipe_views_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
