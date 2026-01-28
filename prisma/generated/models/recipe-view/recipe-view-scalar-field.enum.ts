import { registerEnumType } from '@nestjs/graphql';

export enum RecipeViewScalarFieldEnum {
    id = "id",
    recipeId = "recipeId",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(RecipeViewScalarFieldEnum, { name: 'RecipeViewScalarFieldEnum', description: undefined })
