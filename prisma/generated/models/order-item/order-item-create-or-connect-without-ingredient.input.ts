import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { Type } from 'class-transformer';
import { OrderItemCreateWithoutIngredientInput } from './order-item-create-without-ingredient.input';

@InputType()
export class OrderItemCreateOrConnectWithoutIngredientInput {

    @Field(() => OrderItemWhereUniqueInput, {nullable:false})
    @Type(() => OrderItemWhereUniqueInput)
    where!: Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>;

    @Field(() => OrderItemCreateWithoutIngredientInput, {nullable:false})
    @Type(() => OrderItemCreateWithoutIngredientInput)
    create!: OrderItemCreateWithoutIngredientInput;
}
