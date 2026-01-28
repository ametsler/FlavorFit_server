import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeIngredientCreateNestedOneWithoutOrderItemInput } from '../recipe-ingredient/recipe-ingredient-create-nested-one-without-order-item.input';
import { Type } from 'class-transformer';
import { OrderCreateNestedOneWithoutOrderItemsInput } from '../order/order-create-nested-one-without-order-items.input';

@InputType()
export class OrderItemCreateWithoutIngredientInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Int, {nullable:true})
    quantity?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeIngredientCreateNestedOneWithoutOrderItemInput, {nullable:false})
    @Type(() => RecipeIngredientCreateNestedOneWithoutOrderItemInput)
    recipeIngredient!: RecipeIngredientCreateNestedOneWithoutOrderItemInput;

    @Field(() => OrderCreateNestedOneWithoutOrderItemsInput, {nullable:false})
    order!: OrderCreateNestedOneWithoutOrderItemsInput;
}
