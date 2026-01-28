import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeWhereInput } from './recipe-where.input';
import { Type } from 'class-transformer';
import { RecipeUpdateWithoutRecipeViewInput } from './recipe-update-without-recipe-view.input';

@InputType()
export class RecipeUpdateToOneWithWhereWithoutRecipeViewInput {

    @Field(() => RecipeWhereInput, {nullable:true})
    @Type(() => RecipeWhereInput)
    where?: RecipeWhereInput;

    @Field(() => RecipeUpdateWithoutRecipeViewInput, {nullable:false})
    @Type(() => RecipeUpdateWithoutRecipeViewInput)
    data!: RecipeUpdateWithoutRecipeViewInput;
}
