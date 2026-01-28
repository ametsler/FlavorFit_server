import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { Type } from 'class-transformer';
import { IngredientCreateWithoutOrderItemsInput } from './ingredient-create-without-order-items.input';

@InputType()
export class IngredientCreateOrConnectWithoutOrderItemsInput {

    @Field(() => IngredientWhereUniqueInput, {nullable:false})
    @Type(() => IngredientWhereUniqueInput)
    where!: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;

    @Field(() => IngredientCreateWithoutOrderItemsInput, {nullable:false})
    @Type(() => IngredientCreateWithoutOrderItemsInput)
    create!: IngredientCreateWithoutOrderItemsInput;
}
