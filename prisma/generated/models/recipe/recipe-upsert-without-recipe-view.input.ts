import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateWithoutRecipeViewInput } from './recipe-update-without-recipe-view.input';
import { Type } from 'class-transformer';
import { RecipeCreateWithoutRecipeViewInput } from './recipe-create-without-recipe-view.input';
import { RecipeWhereInput } from './recipe-where.input';

@InputType()
export class RecipeUpsertWithoutRecipeViewInput {

    @Field(() => RecipeUpdateWithoutRecipeViewInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutRecipeViewInput)
    update!: RecipeUpdateWithoutRecipeViewInput;

    @Field(() => RecipeCreateWithoutRecipeViewInput, {nullable:false})
    @Type(() => RecipeCreateWithoutRecipeViewInput)
    create!: RecipeCreateWithoutRecipeViewInput;

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;
}
