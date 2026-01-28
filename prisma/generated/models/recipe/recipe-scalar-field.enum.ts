import { registerEnumType } from '@nestjs/graphql';

export enum RecipeScalarFieldEnum {
    id = "id",
    title = "title",
    description = "description",
    cuisineType = "cuisineType",
    difficulty = "difficulty",
    prepTime = "prepTime",
    cookTime = "cookTime",
    calories = "calories",
    protein = "protein",
    fats = "fats",
    fiber = "fiber",
    rating = "rating",
    authorId = "authorId",
    dishTypeId = "dishTypeId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(RecipeScalarFieldEnum, { name: 'RecipeScalarFieldEnum', description: undefined })
