-- CreateTable
CREATE TABLE "user_schedule" (
    "id" TEXT NOT NULL,
    "start" TIMESTAMP(3) NOT NULL,
    "end" TIMESTAMP(3) NOT NULL,
    "complete" BOOLEAN NOT NULL,
    "reminder" INTEGER,
    "recipe_id" TEXT NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "user_schedule_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "user_schedule" ADD CONSTRAINT "user_schedule_recipe_id_fkey" FOREIGN KEY ("recipe_id") REFERENCES "recipes"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "user_schedule" ADD CONSTRAINT "user_schedule_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
