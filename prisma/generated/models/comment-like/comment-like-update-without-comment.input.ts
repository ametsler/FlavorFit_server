import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateOneRequiredWithoutCommentLikeNestedInput } from '../user/user-update-one-required-without-comment-like-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentLikeUpdateWithoutCommentInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserUpdateOneRequiredWithoutCommentLikeNestedInput, {nullable:true})
    @Type(() => UserUpdateOneRequiredWithoutCommentLikeNestedInput)
    user?: UserUpdateOneRequiredWithoutCommentLikeNestedInput;
}
