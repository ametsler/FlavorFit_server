import { registerEnumType } from '@nestjs/graphql';

export enum DishTypeScalarFieldEnum {
    id = "id",
    order = "order",
    title = "title",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DishTypeScalarFieldEnum, { name: 'DishTypeScalarFieldEnum', description: undefined })
