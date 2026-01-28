import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentLikeCreateInput } from './comment-like-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneCommentLikeArgs {

    @Field(() => CommentLikeCreateInput, {nullable:false})
    @Type(() => CommentLikeCreateInput)
    data!: CommentLikeCreateInput;
}
