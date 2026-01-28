import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace'
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { OrderItemUncheckedUpdateManyWithoutRecipeIngredientNestedInput } from '../order-item/order-item-unchecked-update-many-without-recipe-ingredient-nested.input';

@InputType()
export class RecipeIngredientUncheckedUpdateWithoutRecipeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    quantity?: Decimal;

    @Field(() => String, {nullable:true})
    ingredientId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderItemUncheckedUpdateManyWithoutRecipeIngredientNestedInput, {nullable:true})
    @Type(() => OrderItemUncheckedUpdateManyWithoutRecipeIngredientNestedInput)
    OrderItem?: OrderItemUncheckedUpdateManyWithoutRecipeIngredientNestedInput;
}
