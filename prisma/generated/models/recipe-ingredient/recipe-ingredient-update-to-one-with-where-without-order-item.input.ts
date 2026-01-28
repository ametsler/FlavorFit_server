import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientWhereInput } from './recipe-ingredient-where.input';
import { Type } from 'class-transformer';
import { RecipeIngredientUpdateWithoutOrderItemInput } from './recipe-ingredient-update-without-order-item.input';

@InputType()
export class RecipeIngredientUpdateToOneWithWhereWithoutOrderItemInput {

    @Field(() => RecipeIngredientWhereInput, {nullable:true})
    @Type(() => RecipeIngredientWhereInput)
    where?: RecipeIngredientWhereInput;

    @Field(() => RecipeIngredientUpdateWithoutOrderItemInput, {nullable:false})
    @Type(() => RecipeIngredientUpdateWithoutOrderItemInput)
    data!: RecipeIngredientUpdateWithoutOrderItemInput;
}
