import { registerEnumType } from '@nestjs/graphql';

export enum DeliveryScalarFieldEnum {
    id = "id",
    name = "name",
    phone = "phone",
    status = "status",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(DeliveryScalarFieldEnum, { name: 'DeliveryScalarFieldEnum', description: undefined })
