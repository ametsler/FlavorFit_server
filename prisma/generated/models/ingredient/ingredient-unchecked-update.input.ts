import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Unit } from '../prisma/unit.enum';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace'
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { RecipeIngredientUncheckedUpdateManyWithoutIngredientNestedInput } from '../recipe-ingredient/recipe-ingredient-unchecked-update-many-without-ingredient-nested.input';
import { OrderItemUncheckedUpdateManyWithoutIngredientNestedInput } from '../order-item/order-item-unchecked-update-many-without-ingredient-nested.input';

@InputType()
export class IngredientUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    iconUrl?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Unit, {nullable:true})
    unit?: `${Unit}`;

    @Field(() => GraphQLDecimal, {nullable:true})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price?: Decimal;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeIngredientUncheckedUpdateManyWithoutIngredientNestedInput, {nullable:true})
    @Type(() => RecipeIngredientUncheckedUpdateManyWithoutIngredientNestedInput)
    recipes?: RecipeIngredientUncheckedUpdateManyWithoutIngredientNestedInput;

    @Field(() => OrderItemUncheckedUpdateManyWithoutIngredientNestedInput, {nullable:true})
    @Type(() => OrderItemUncheckedUpdateManyWithoutIngredientNestedInput)
    orderItems?: OrderItemUncheckedUpdateManyWithoutIngredientNestedInput;
}
