import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentUpdateOneRequiredWithoutLikesNestedInput } from '../comment/comment-update-one-required-without-likes-nested.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentLikeUpdateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CommentUpdateOneRequiredWithoutLikesNestedInput, {nullable:true})
    @Type(() => CommentUpdateOneRequiredWithoutLikesNestedInput)
    comment?: CommentUpdateOneRequiredWithoutLikesNestedInput;
}
