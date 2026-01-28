import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { OrderItemCreateWithoutIngredientInput } from './order-item-create-without-ingredient.input';
import { Type } from 'class-transformer';
import { OrderItemCreateOrConnectWithoutIngredientInput } from './order-item-create-or-connect-without-ingredient.input';
import { OrderItemUpsertWithWhereUniqueWithoutIngredientInput } from './order-item-upsert-with-where-unique-without-ingredient.input';
import { OrderItemCreateManyIngredientInputEnvelope } from './order-item-create-many-ingredient-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { OrderItemWhereUniqueInput } from './order-item-where-unique.input';
import { OrderItemUpdateWithWhereUniqueWithoutIngredientInput } from './order-item-update-with-where-unique-without-ingredient.input';
import { OrderItemUpdateManyWithWhereWithoutIngredientInput } from './order-item-update-many-with-where-without-ingredient.input';
import { OrderItemScalarWhereInput } from './order-item-scalar-where.input';

@InputType()
export class OrderItemUncheckedUpdateManyWithoutIngredientNestedInput {

    @Field(() => [OrderItemCreateWithoutIngredientInput], {nullable:true})
    @Type(() => OrderItemCreateWithoutIngredientInput)
    create?: Array<OrderItemCreateWithoutIngredientInput>;

    @Field(() => [OrderItemCreateOrConnectWithoutIngredientInput], {nullable:true})
    @Type(() => OrderItemCreateOrConnectWithoutIngredientInput)
    connectOrCreate?: Array<OrderItemCreateOrConnectWithoutIngredientInput>;

    @Field(() => [OrderItemUpsertWithWhereUniqueWithoutIngredientInput], {nullable:true})
    @Type(() => OrderItemUpsertWithWhereUniqueWithoutIngredientInput)
    upsert?: Array<OrderItemUpsertWithWhereUniqueWithoutIngredientInput>;

    @Field(() => OrderItemCreateManyIngredientInputEnvelope, {nullable:true})
    @Type(() => OrderItemCreateManyIngredientInputEnvelope)
    createMany?: OrderItemCreateManyIngredientInputEnvelope;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    set?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;

    @Field(() => [OrderItemWhereUniqueInput], {nullable:true})
    @Type(() => OrderItemWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<OrderItemWhereUniqueInput, 'id'>>;

    @Field(() => [OrderItemUpdateWithWhereUniqueWithoutIngredientInput], {nullable:true})
    @Type(() => OrderItemUpdateWithWhereUniqueWithoutIngredientInput)
    update?: Array<OrderItemUpdateWithWhereUniqueWithoutIngredientInput>;

    @Field(() => [OrderItemUpdateManyWithWhereWithoutIngredientInput], {nullable:true})
    @Type(() => OrderItemUpdateManyWithWhereWithoutIngredientInput)
    updateMany?: Array<OrderItemUpdateManyWithWhereWithoutIngredientInput>;

    @Field(() => [OrderItemScalarWhereInput], {nullable:true})
    @Type(() => OrderItemScalarWhereInput)
    deleteMany?: Array<OrderItemScalarWhereInput>;
}
