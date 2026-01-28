import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutRecipeLikeNestedInput } from '../user/user-update-one-required-without-recipe-like-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class RecipeLikeUpdateWithoutRecipeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserUpdateOneRequiredWithoutRecipeLikeNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutRecipeLikeNestedInput)
    user?: UserUpdateOneRequiredWithoutRecipeLikeNestedInput;
}
