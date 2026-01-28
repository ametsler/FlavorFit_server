import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutRecipeViewNestedInput } from '../user/user-update-one-required-without-recipe-view-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class RecipeViewUpdateWithoutRecipeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserUpdateOneRequiredWithoutRecipeViewNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutRecipeViewNestedInput)
    user?: UserUpdateOneRequiredWithoutRecipeViewNestedInput;
}
