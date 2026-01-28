import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientCreateWithoutOrderItemsInput } from './ingredient-create-without-order-items.input';
import { Type } from 'class-transformer';
import { IngredientCreateOrConnectWithoutOrderItemsInput } from './ingredient-create-or-connect-without-order-items.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';

@InputType()
export class IngredientCreateNestedOneWithoutOrderItemsInput {

    @Field(() => IngredientCreateWithoutOrderItemsInput, {nullable:true})
    @Type(() => IngredientCreateWithoutOrderItemsInput)
    create?: IngredientCreateWithoutOrderItemsInput;

    @Field(() => IngredientCreateOrConnectWithoutOrderItemsInput, {nullable:true})
    @Type(() => IngredientCreateOrConnectWithoutOrderItemsInput)
    connectOrCreate?: IngredientCreateOrConnectWithoutOrderItemsInput;

    @Field(() => IngredientWhereUniqueInput, {nullable:true})
    @Type(() => IngredientWhereUniqueInput)
    connect?: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;
}
