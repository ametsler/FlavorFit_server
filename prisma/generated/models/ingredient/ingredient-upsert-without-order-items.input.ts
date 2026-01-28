import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientUpdateWithoutOrderItemsInput } from './ingredient-update-without-order-items.input';
import { Type } from 'class-transformer';
import { IngredientCreateWithoutOrderItemsInput } from './ingredient-create-without-order-items.input';
import { IngredientWhereInput } from './ingredient-where.input';

@InputType()
export class IngredientUpsertWithoutOrderItemsInput {

    @Field(() => IngredientUpdateWithoutOrderItemsInput, {nullable:false})
    @Type(() => IngredientUpdateWithoutOrderItemsInput)
    update!: IngredientUpdateWithoutOrderItemsInput;

    @Field(() => IngredientCreateWithoutOrderItemsInput, {nullable:false})
    @Type(() => IngredientCreateWithoutOrderItemsInput)
    create!: IngredientCreateWithoutOrderItemsInput;

    @Field(() => IngredientWhereInput, {nullable:true})
    @Type(() => IngredientWhereInput)
    where?: IngredientWhereInput;
}
