import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentLikeUpdateManyWithoutCommentNestedInput } from '../comment-like/comment-like-update-many-without-comment-nested.input';
import { RecipeUpdateOneRequiredWithoutCommentsNestedInput } from '../recipe/recipe-update-one-required-without-comments-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentUpdateWithoutAuthorInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CommentLikeUpdateManyWithoutCommentNestedInput, {nullable:true})
    likes?: CommentLikeUpdateManyWithoutCommentNestedInput;

    @Field(() => RecipeUpdateOneRequiredWithoutCommentsNestedInput, {nullable:true})
    @Type(() => RecipeUpdateOneRequiredWithoutCommentsNestedInput)
    recipe?: RecipeUpdateOneRequiredWithoutCommentsNestedInput;
}
