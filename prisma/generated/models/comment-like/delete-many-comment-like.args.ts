import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentLikeWhereInput } from './comment-like-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyCommentLikeArgs {

    @Field(() => CommentLikeWhereInput, {nullable:true})
    @Type(() => CommentLikeWhereInput)
    where?: CommentLikeWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
