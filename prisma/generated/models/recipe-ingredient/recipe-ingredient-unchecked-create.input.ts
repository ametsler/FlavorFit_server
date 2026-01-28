import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace'
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { OrderItemUncheckedCreateNestedManyWithoutRecipeIngredientInput } from '../order-item/order-item-unchecked-create-nested-many-without-recipe-ingredient.input';

@InputType()
export class RecipeIngredientUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    quantity!: Decimal;

    @Field(() => String, {nullable:false})
    recipeId!: string;

    @Field(() => String, {nullable:false})
    ingredientId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderItemUncheckedCreateNestedManyWithoutRecipeIngredientInput, {nullable:true})
    @Type(() => OrderItemUncheckedCreateNestedManyWithoutRecipeIngredientInput)
    OrderItem?: OrderItemUncheckedCreateNestedManyWithoutRecipeIngredientInput;
}
