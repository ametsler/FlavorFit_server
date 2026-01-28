import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentLikeCreateNestedManyWithoutCommentInput } from '../comment-like/comment-like-create-nested-many-without-comment.input';
import { RecipeCreateNestedOneWithoutCommentsInput } from '../recipe/recipe-create-nested-one-without-comments.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentCreateWithoutAuthorInput {

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
}
