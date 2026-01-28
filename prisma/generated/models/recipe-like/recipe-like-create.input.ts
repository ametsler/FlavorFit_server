import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateNestedOneWithoutLikesInput } from '../recipe/recipe-create-nested-one-without-likes.input';
import { Type } from 'class-transformer';
import { UserCreateNestedOneWithoutRecipeLikeInput } from '../user/user-create-nested-one-without-recipe-like.input';

@InputType()
export class RecipeLikeCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeCreateNestedOneWithoutLikesInput, {nullable:false})
    @Type(() => RecipeCreateNestedOneWithoutLikesInput)
    recipe!: RecipeCreateNestedOneWithoutLikesInput;

    @Field(() => UserCreateNestedOneWithoutRecipeLikeInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutRecipeLikeInput)
    user!: UserCreateNestedOneWithoutRecipeLikeInput;
}
