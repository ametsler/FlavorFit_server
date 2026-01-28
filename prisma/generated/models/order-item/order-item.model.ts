import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { RecipeIngredient } from '../recipe-ingredient/recipe-ingredient.model';
import { Order } from '../order/order.model';
import { Ingredient } from '../ingredient/ingredient.model';

@ObjectType()
export class OrderItem {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => Int, {defaultValue:1,nullable:true})
    quantity!: number | null;

    @Field(() => String, {nullable:false})
    recipeIngredientId!: string;

    @Field(() => String, {nullable:false})
    orderId!: string;

    @Field(() => String, {nullable:true})
    ingredientId!: string | null;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => RecipeIngredient, {nullable:false})
    recipeIngredient?: RecipeIngredient;

    @Field(() => Order, {nullable:false})
    order?: Order;

    @Field(() => Ingredient, {nullable:true})
    ingredient?: Ingredient | null;
}
