import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateWithoutOrderItemInput } from './recipe-ingredient-create-without-order-item.input';

@InputType()
export class RecipeIngredientCreateOrConnectWithoutOrderItemInput {

    @Field(() => RecipeIngredientWhereUniqueInput, {nullable:false})
    @Type(() => RecipeIngredientWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id' | 'recipeId_ingredientId'>;

    @Field(() => RecipeIngredientCreateWithoutOrderItemInput, {nullable:false})
    @Type(() => RecipeIngredientCreateWithoutOrderItemInput)
    create!: RecipeIngredientCreateWithoutOrderItemInput;
}
