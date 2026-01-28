import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Unit } from '../prisma/unit.enum';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace'
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { transformToDecimal } from 'prisma-graphql-type-decimal';
import { Transform } from 'class-transformer';
import { Type } from 'class-transformer';
import { OrderItemUncheckedCreateNestedManyWithoutIngredientInput } from '../order-item/order-item-unchecked-create-nested-many-without-ingredient.input';

@InputType()
export class IngredientUncheckedCreateWithoutRecipesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    iconUrl!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Unit, {nullable:false})
    unit!: `${Unit}`;

    @Field(() => GraphQLDecimal, {nullable:false})
    @Type(() => Object)
    @Transform(transformToDecimal)
    price!: Decimal;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => OrderItemUncheckedCreateNestedManyWithoutIngredientInput, {nullable:true})
    @Type(() => OrderItemUncheckedCreateNestedManyWithoutIngredientInput)
    orderItems?: OrderItemUncheckedCreateNestedManyWithoutIngredientInput;
}
