import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateNestedOneWithoutRecipeViewInput } from '../recipe/recipe-create-nested-one-without-recipe-view.input';
import { Type } from 'class-transformer';
import { UserCreateNestedOneWithoutRecipeViewInput } from '../user/user-create-nested-one-without-recipe-view.input';

@InputType()
export class RecipeViewCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeCreateNestedOneWithoutRecipeViewInput, {nullable:false})
    @Type(() => RecipeCreateNestedOneWithoutRecipeViewInput)
    recipe!: RecipeCreateNestedOneWithoutRecipeViewInput;

    @Field(() => UserCreateNestedOneWithoutRecipeViewInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutRecipeViewInput)
    user!: UserCreateNestedOneWithoutRecipeViewInput;
}
