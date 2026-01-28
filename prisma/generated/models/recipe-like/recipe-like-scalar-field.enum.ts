import { registerEnumType } from '@nestjs/graphql';

export enum RecipeLikeScalarFieldEnum {
    id = "id",
    recipeId = "recipeId",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(RecipeLikeScalarFieldEnum, { name: 'RecipeLikeScalarFieldEnum', description: undefined })
