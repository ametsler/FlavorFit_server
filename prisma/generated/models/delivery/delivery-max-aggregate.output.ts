import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DeliveryStatus } from '../prisma/delivery-status.enum';

@ObjectType()
export class DeliveryMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => String, {nullable:true})
    phone?: string;

    @Field(() => DeliveryStatus, {nullable:true})
    status?: `${DeliveryStatus}`;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
