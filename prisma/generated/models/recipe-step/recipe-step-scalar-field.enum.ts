import { registerEnumType } from '@nestjs/graphql';

export enum RecipeStepScalarFieldEnum {
    id = "id",
    order = "order",
    title = "title",
    description = "description",
    imgUrl = "imgUrl",
    recipeId = "recipeId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(RecipeStepScalarFieldEnum, { name: 'RecipeStepScalarFieldEnum', description: undefined })
