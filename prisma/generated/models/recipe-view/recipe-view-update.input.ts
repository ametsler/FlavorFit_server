import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateOneRequiredWithoutRecipeViewNestedInput } from '../recipe/recipe-update-one-required-without-recipe-view-nested.input';
import { Type } from 'class-transformer';
import { UserUpdateOneRequiredWithoutRecipeViewNestedInput } from '../user/user-update-one-required-without-recipe-view-nested.input';

@InputType()
export class RecipeViewUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeUpdateOneRequiredWithoutRecipeViewNestedInput, {nullable:true})
    @Type(() => RecipeUpdateOneRequiredWithoutRecipeViewNestedInput)
    recipe?: RecipeUpdateOneRequiredWithoutRecipeViewNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutRecipeViewNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutRecipeViewNestedInput)
    user?: UserUpdateOneRequiredWithoutRecipeViewNestedInput;
}
