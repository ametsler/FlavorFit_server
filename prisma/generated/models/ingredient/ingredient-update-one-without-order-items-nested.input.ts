import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientCreateWithoutOrderItemsInput } from './ingredient-create-without-order-items.input';
import { Type } from 'class-transformer';
import { IngredientCreateOrConnectWithoutOrderItemsInput } from './ingredient-create-or-connect-without-order-items.input';
import { IngredientUpsertWithoutOrderItemsInput } from './ingredient-upsert-without-order-items.input';
import { IngredientWhereInput } from './ingredient-where.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { IngredientWhereUniqueInput } from './ingredient-where-unique.input';
import { IngredientUpdateToOneWithWhereWithoutOrderItemsInput } from './ingredient-update-to-one-with-where-without-order-items.input';

@InputType()
export class IngredientUpdateOneWithoutOrderItemsNestedInput {

    @Field(() => IngredientCreateWithoutOrderItemsInput, {nullable:true})
    @Type(() => IngredientCreateWithoutOrderItemsInput)
    create?: IngredientCreateWithoutOrderItemsInput;

    @Field(() => IngredientCreateOrConnectWithoutOrderItemsInput, {nullable:true})
    @Type(() => IngredientCreateOrConnectWithoutOrderItemsInput)
    connectOrCreate?: IngredientCreateOrConnectWithoutOrderItemsInput;

    @Field(() => IngredientUpsertWithoutOrderItemsInput, {nullable:true})
    @Type(() => IngredientUpsertWithoutOrderItemsInput)
    upsert?: IngredientUpsertWithoutOrderItemsInput;

    @Field(() => IngredientWhereInput, {nullable:true})
    @Type(() => IngredientWhereInput)
    disconnect?: IngredientWhereInput;

    @Field(() => IngredientWhereInput, {nullable:true})
    @Type(() => IngredientWhereInput)
    delete?: IngredientWhereInput;

    @Field(() => IngredientWhereUniqueInput, {nullable:true})
    @Type(() => IngredientWhereUniqueInput)
    connect?: Prisma.AtLeast<IngredientWhereUniqueInput, 'id'>;

    @Field(() => IngredientUpdateToOneWithWhereWithoutOrderItemsInput, {nullable:true})
    @Type(() => IngredientUpdateToOneWithWhereWithoutOrderItemsInput)
    update?: IngredientUpdateToOneWithWhereWithoutOrderItemsInput;
}
