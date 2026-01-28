import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace'
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { RecipeUpdateOneRequiredWithoutRecipeIngredientsNestedInput } from '../recipe/recipe-update-one-required-without-recipe-ingredients-nested.input';
import { IngredientUpdateOneRequiredWithoutRecipesNestedInput } from '../ingredient/ingredient-update-one-required-without-recipes-nested.input';

@InputType()
export class RecipeIngredientUpdateWithoutOrderItemInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    quantity?: Decimal;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeUpdateOneRequiredWithoutRecipeIngredientsNestedInput, {nullable:true})
    @Type(() => RecipeUpdateOneRequiredWithoutRecipeIngredientsNestedInput)
    recipe?: RecipeUpdateOneRequiredWithoutRecipeIngredientsNestedInput;

    @Field(() => IngredientUpdateOneRequiredWithoutRecipesNestedInput, {nullable:true})
    @Type(() => IngredientUpdateOneRequiredWithoutRecipesNestedInput)
    ingredient?: IngredientUpdateOneRequiredWithoutRecipesNestedInput;
}
