import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace'
import { OrderItem } from '../order-item/order-item.model';
import { Recipe } from '../recipe/recipe.model';
import { Ingredient } from '../ingredient/ingredient.model';

@ObjectType()
export class RecipeIngredient {

    @Field(() => ID, {nullable:false})
    id!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    quantity!: Decimal;

    @Field(() => String, {nullable:false})
    recipeId!: string;

    @Field(() => String, {nullable:false})
    ingredientId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [OrderItem], {nullable:true})
    OrderItem?: Array<OrderItem>;

    @Field(() => Recipe, {nullable:false})
    recipe?: Recipe;

    @Field(() => Ingredient, {nullable:false})
    ingredient?: Ingredient;
}
