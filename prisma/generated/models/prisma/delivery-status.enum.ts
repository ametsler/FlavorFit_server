import { registerEnumType } from '@nestjs/graphql';

export enum DeliveryStatus {
    PREPARING = "PREPARING",
    DELIVERY = "DELIVERY",
    COMPLETED = "COMPLETED"
}


registerEnumType(DeliveryStatus, { name: 'DeliveryStatus', description: undefined })
