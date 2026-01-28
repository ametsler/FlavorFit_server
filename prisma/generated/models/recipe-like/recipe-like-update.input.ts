import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeUpdateOneRequiredWithoutLikesNestedInput } from '../recipe/recipe-update-one-required-without-likes-nested.input';
import { Type } from 'class-transformer';
import { UserUpdateOneRequiredWithoutRecipeLikeNestedInput } from '../user/user-update-one-required-without-recipe-like-nested.input';

@InputType()
export class RecipeLikeUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeUpdateOneRequiredWithoutLikesNestedInput, {nullable:true})
    @Type(() => RecipeUpdateOneRequiredWithoutLikesNestedInput)
    recipe?: RecipeUpdateOneRequiredWithoutLikesNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutRecipeLikeNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutRecipeLikeNestedInput)
    user?: UserUpdateOneRequiredWithoutRecipeLikeNestedInput;
}
