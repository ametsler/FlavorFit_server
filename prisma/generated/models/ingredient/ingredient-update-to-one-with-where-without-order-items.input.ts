import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IngredientWhereInput } from './ingredient-where.input';
import { Type } from 'class-transformer';
import { IngredientUpdateWithoutOrderItemsInput } from './ingredient-update-without-order-items.input';

@InputType()
export class IngredientUpdateToOneWithWhereWithoutOrderItemsInput {

    @Field(() => IngredientWhereInput, {nullable:true})
    @Type(() => IngredientWhereInput)
    where?: IngredientWhereInput;

    @Field(() => IngredientUpdateWithoutOrderItemsInput, {nullable:false})
    @Type(() => IngredientUpdateWithoutOrderItemsInput)
    data!: IngredientUpdateWithoutOrderItemsInput;
}
