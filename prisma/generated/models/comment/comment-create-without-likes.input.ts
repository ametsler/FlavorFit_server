import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateNestedOneWithoutCommentsInput } from '../recipe/recipe-create-nested-one-without-comments.input';
import { Type } from 'class-transformer';
import { UserCreateNestedOneWithoutCommentInput } from '../user/user-create-nested-one-without-comment.input';

@InputType()
export class CommentCreateWithoutLikesInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => RecipeCreateNestedOneWithoutCommentsInput, {nullable:false})
    @Type(() => RecipeCreateNestedOneWithoutCommentsInput)
    recipe!: RecipeCreateNestedOneWithoutCommentsInput;

    @Field(() => UserCreateNestedOneWithoutCommentInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutCommentInput)
    author!: UserCreateNestedOneWithoutCommentInput;
}
