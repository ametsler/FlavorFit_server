import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateOneRequiredWithoutRecipeViewNestedInput } from '../recipe/recipe-update-one-required-without-recipe-view-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class RecipeViewUpdateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeUpdateOneRequiredWithoutRecipeViewNestedInput, {nullable:true})
    @Type(() => RecipeUpdateOneRequiredWithoutRecipeViewNestedInput)
    recipe?: RecipeUpdateOneRequiredWithoutRecipeViewNestedInput;
}
