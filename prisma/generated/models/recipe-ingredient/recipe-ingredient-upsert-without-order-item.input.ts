import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeIngredientUpdateWithoutOrderItemInput } from './recipe-ingredient-update-without-order-item.input';
import { Type } from 'class-transformer';
import { RecipeIngredientCreateWithoutOrderItemInput } from './recipe-ingredient-create-without-order-item.input';
import { RecipeIngredientWhereInput } from './recipe-ingredient-where.input';

@InputType()
export class RecipeIngredientUpsertWithoutOrderItemInput {

    @Field(() => RecipeIngredientUpdateWithoutOrderItemInput, {nullable:false})
    @Type(() => RecipeIngredientUpdateWithoutOrderItemInput)
    update!: RecipeIngredientUpdateWithoutOrderItemInput;

    @Field(() => RecipeIngredientCreateWithoutOrderItemInput, {nullable:false})
    @Type(() => RecipeIngredientCreateWithoutOrderItemInput)
    create!: RecipeIngredientCreateWithoutOrderItemInput;

    @Field(() => RecipeIngredientWhereInput, {nullable:true})
    @Type(() => RecipeIngredientWhereInput)
    where?: RecipeIngredientWhereInput;
}
