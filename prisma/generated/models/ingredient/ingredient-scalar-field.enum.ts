import { registerEnumType } from '@nestjs/graphql';

export enum IngredientScalarFieldEnum {
    id = "id",
    iconUrl = "iconUrl",
    name = "name",
    unit = "unit",
    price = "price",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(IngredientScalarFieldEnum, { name: 'IngredientScalarFieldEnum', description: undefined })
