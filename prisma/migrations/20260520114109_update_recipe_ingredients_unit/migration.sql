/*
  Warnings:

  - The values [CLOVES] on the enum `Unit` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "Unit_new" AS ENUM ('GRAM', 'KILOGRAM', 'MILLILITER', 'LITER', 'PIECE', 'CLOVE', 'PINCH', 'BUNCH', 'TWIG', 'LEAF', 'ROOT', 'TUBER', 'HEAD', 'SLICE', 'POD', 'CAN', 'PACK', 'BAR', 'CUBE', 'TEASPOON', 'TABLESPOON', 'DESSERTSPOON', 'GLASS', 'DROP', 'BY_TASTE', 'TO_DESIRED_CONSISTENCY', 'OPTIONAL', 'AS_NEEDED');
ALTER TABLE "recipe_ingredients" ALTER COLUMN "unit" TYPE "Unit_new" USING ("unit"::text::"Unit_new");
ALTER TYPE "Unit" RENAME TO "Unit_old";
ALTER TYPE "Unit_new" RENAME TO "Unit";
DROP TYPE "public"."Unit_old";
COMMIT;
