import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentUpdateOneRequiredWithoutLikesNestedInput } from '../comment/comment-update-one-required-without-likes-nested.input';
import { Type } from 'class-transformer';
import { UserUpdateOneRequiredWithoutCommentLikeNestedInput } from '../user/user-update-one-required-without-comment-like-nested.input';

@InputType()
export class CommentLikeUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CommentUpdateOneRequiredWithoutLikesNestedInput, {nullable:true})
    @Type(() => CommentUpdateOneRequiredWithoutLikesNestedInput)
    comment?: CommentUpdateOneRequiredWithoutLikesNestedInput;

    @Field(() => UserUpdateOneRequiredWithoutCommentLikeNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutCommentLikeNestedInput)
    user?: UserUpdateOneRequiredWithoutCommentLikeNestedInput;
}
