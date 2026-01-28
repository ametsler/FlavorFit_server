import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentLikeCreateNestedManyWithoutCommentInput } from '../comment-like/comment-like-create-nested-many-without-comment.input';
import { RecipeCreateNestedOneWithoutCommentsInput } from '../recipe/recipe-create-nested-one-without-comments.input';
import { Type } from 'class-transformer';
import { UserCreateNestedOneWithoutCommentInput } from '../user/user-create-nested-one-without-comment.input';

@InputType()
export class CommentCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CommentLikeCreateNestedManyWithoutCommentInput, {nullable:true})
    likes?: CommentLikeCreateNestedManyWithoutCommentInput;

    @Field(() => RecipeCreateNestedOneWithoutCommentsInput, {nullable:false})
    @Type(() => RecipeCreateNestedOneWithoutCommentsInput)
    recipe!: RecipeCreateNestedOneWithoutCommentsInput;

    @Field(() => UserCreateNestedOneWithoutCommentInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutCommentInput)
    author!: UserCreateNestedOneWithoutCommentInput;
}
