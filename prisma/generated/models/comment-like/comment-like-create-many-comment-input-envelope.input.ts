import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentLikeCreateManyCommentInput } from './comment-like-create-many-comment.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentLikeCreateManyCommentInputEnvelope {

    @Field(() => [CommentLikeCreateManyCommentInput], {nullable:false})
    @Type(() => CommentLikeCreateManyCommentInput)
    data!: Array<CommentLikeCreateManyCommentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
