import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientCreateWithoutOrderItemInput } from './recipe-ingredient-create-without-order-item.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateOrConnectWithoutOrderItemInput } from './recipe-ingredient-create-or-connect-without-order-item.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';

@InputType()
export class RecipeIngredientCreateNestedOneWithoutOrderItemInput {

    @Field(() => RecipeIngredientCreateWithoutOrderItemInput, {nullable:true})
    @Type(() => RecipeIngredientCreateWithoutOrderItemInput)
    create?: RecipeIngredientCreateWithoutOrderItemInput;

    @Field(() => RecipeIngredientCreateOrConnectWithoutOrderItemInput, {nullable:true})
    @Type(() => RecipeIngredientCreateOrConnectWithoutOrderItemInput)
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutOrderItemInput;

    @Field(() => RecipeIngredientWhereUniqueInput, {nullable:true})
    @Type(() => RecipeIngredientWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id' | 'recipeId_ingredientId'>;
}
