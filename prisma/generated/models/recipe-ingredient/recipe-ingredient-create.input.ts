import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace'
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { OrderItemCreateNestedManyWithoutRecipeIngredientInput } from '../order-item/order-item-create-nested-many-without-recipe-ingredient.input';
import { RecipeCreateNestedOneWithoutRecipeIngredientsInput } from '../recipe/recipe-create-nested-one-without-recipe-ingredients.input';
import { IngredientCreateNestedOneWithoutRecipesInput } from '../ingredient/ingredient-create-nested-one-without-recipes.input';

@InputType()
export class RecipeIngredientCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    quantity!: Decimal;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderItemCreateNestedManyWithoutRecipeIngredientInput, {nullable:true})
    @Type(() => OrderItemCreateNestedManyWithoutRecipeIngredientInput)
    OrderItem?: OrderItemCreateNestedManyWithoutRecipeIngredientInput;

    @Field(() => RecipeCreateNestedOneWithoutRecipeIngredientsInput, {nullable:false})
    @Type(() => RecipeCreateNestedOneWithoutRecipeIngredientsInput)
    recipe!: RecipeCreateNestedOneWithoutRecipeIngredientsInput;

    @Field(() => IngredientCreateNestedOneWithoutRecipesInput, {nullable:false})
    @Type(() => IngredientCreateNestedOneWithoutRecipesInput)
    ingredient!: IngredientCreateNestedOneWithoutRecipesInput;
}
