import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { Type } from 'class-transformer';
import { OrderItemUpdateWithoutOrderInput } from './order-item-update-without-order.input';

@InputType()
export class OrderItemUpdateWithWhereUniqueWithoutOrderInput {

    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;

    @Field(() => OrderItemUpdateWithoutOrderInput, {nullable:false})
    @Type(() => OrderItemUpdateWithoutOrderInput)
    data!: OrderItemUpdateWithoutOrderInput;
}
