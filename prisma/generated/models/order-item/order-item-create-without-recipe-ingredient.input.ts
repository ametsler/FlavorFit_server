import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { OrderCreateNestedOneWithoutOrderItemsInput } from '../order/order-create-nested-one-without-order-items.input';
import { IngredientCreateNestedOneWithoutOrderItemsInput } from '../ingredient/ingredient-create-nested-one-without-order-items.input';
import { Type } from 'class-transformer';

@InputType()
export class OrderItemCreateWithoutRecipeIngredientInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    quantity?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderCreateNestedOneWithoutOrderItemsInput, {nullable:false})
    order!: OrderCreateNestedOneWithoutOrderItemsInput;

    @Field(() => IngredientCreateNestedOneWithoutOrderItemsInput, {nullable:true})
    @Type(() => IngredientCreateNestedOneWithoutOrderItemsInput)
    ingredient?: IngredientCreateNestedOneWithoutOrderItemsInput;
}
