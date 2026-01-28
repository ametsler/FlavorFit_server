import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace'
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { OrderItemUpdateManyWithoutRecipeIngredientNestedInput } from '../order-item/order-item-update-many-without-recipe-ingredient-nested.input';
import { RecipeUpdateOneRequiredWithoutRecipeIngredientsNestedInput } from '../recipe/recipe-update-one-required-without-recipe-ingredients-nested.input';

@InputType()
export class RecipeIngredientUpdateWithoutIngredientInput {

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

    @Field(() => OrderItemUpdateManyWithoutRecipeIngredientNestedInput, {nullable:true})
    @Type(() => OrderItemUpdateManyWithoutRecipeIngredientNestedInput)
    OrderItem?: OrderItemUpdateManyWithoutRecipeIngredientNestedInput;

    @Field(() => RecipeUpdateOneRequiredWithoutRecipeIngredientsNestedInput, {nullable:true})
    @Type(() => RecipeUpdateOneRequiredWithoutRecipeIngredientsNestedInput)
    recipe?: RecipeUpdateOneRequiredWithoutRecipeIngredientsNestedInput;
}
