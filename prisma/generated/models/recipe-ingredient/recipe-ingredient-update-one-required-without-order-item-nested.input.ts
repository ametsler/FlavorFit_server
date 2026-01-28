import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientCreateWithoutOrderItemInput } from './recipe-ingredient-create-without-order-item.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateOrConnectWithoutOrderItemInput } from './recipe-ingredient-create-or-connect-without-order-item.input';
import { RecipeIngredientUpsertWithoutOrderItemInput } from './recipe-ingredient-upsert-without-order-item.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeIngredientWhereUniqueInput } from './recipe-ingredient-where-unique.input';
import { RecipeIngredientUpdateToOneWithWhereWithoutOrderItemInput } from './recipe-ingredient-update-to-one-with-where-without-order-item.input';

@InputType()
export class RecipeIngredientUpdateOneRequiredWithoutOrderItemNestedInput {

    @Field(() => RecipeIngredientCreateWithoutOrderItemInput, {nullable:true})
    @Type(() => RecipeIngredientCreateWithoutOrderItemInput)
    create?: RecipeIngredientCreateWithoutOrderItemInput;

    @Field(() => RecipeIngredientCreateOrConnectWithoutOrderItemInput, {nullable:true})
    @Type(() => RecipeIngredientCreateOrConnectWithoutOrderItemInput)
    connectOrCreate?: RecipeIngredientCreateOrConnectWithoutOrderItemInput;

    @Field(() => RecipeIngredientUpsertWithoutOrderItemInput, {nullable:true})
    @Type(() => RecipeIngredientUpsertWithoutOrderItemInput)
    upsert?: RecipeIngredientUpsertWithoutOrderItemInput;

    @Field(() => RecipeIngredientWhereUniqueInput, {nullable:true})
    @Type(() => RecipeIngredientWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeIngredientWhereUniqueInput, 'id' | 'recipeId_ingredientId'>;

    @Field(() => RecipeIngredientUpdateToOneWithWhereWithoutOrderItemInput, {nullable:true})
    @Type(() => RecipeIngredientUpdateToOneWithWhereWithoutOrderItemInput)
    update?: RecipeIngredientUpdateToOneWithWhereWithoutOrderItemInput;
}
