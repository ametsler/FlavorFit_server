import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { Type } from 'class-transformer';
import { OrderItemCreateWithoutOrderInput } from './order-item-create-without-order.input';

@InputType()
export class OrderItemCreateOrConnectWithoutOrderInput {

    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;

    @Field(() => OrderItemCreateWithoutOrderInput, {nullable:false})
    @Type(() => OrderItemCreateWithoutOrderInput)
    create!: OrderItemCreateWithoutOrderInput;
}
