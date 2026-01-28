import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemCreateWithoutIngredientInput } from './order-item-create-without-ingredient.input';
import { Type } from 'class-transformer';
import { OrderItemCreateOrConnectWithoutIngredientInput } from './order-item-create-or-connect-without-ingredient.input';
import { OrderItemCreateManyIngredientInputEnvelope } from './order-item-create-many-ingredient-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';

@InputType()
export class OrderItemCreateNestedManyWithoutIngredientInput {

    @Field(() => [OrderItemCreateWithoutIngredientInput], {nullable:true})
    @Type(() => OrderItemCreateWithoutIngredientInput)
    create?: Array<OrderItemCreateWithoutIngredientInput>;

    @Field(() => [OrderItemCreateOrConnectWithoutIngredientInput], {nullable:true})
    @Type(() => OrderItemCreateOrConnectWithoutIngredientInput)
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutIngredientInput>;

    @Field(() => OrderItemCreateManyIngredientInputEnvelope, {nullable:true})
    @Type(() => OrderItemCreateManyIngredientInputEnvelope)
    createMany?: OrderItemCreateManyIngredientInputEnvelope;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;
}
