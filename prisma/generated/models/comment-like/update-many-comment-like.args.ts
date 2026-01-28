import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentLikeUpdateManyMutationInput } from './comment-like-update-many-mutation.input';
import { Type } from 'class-transformer';
import { CommentLikeWhereInput } from './comment-like-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyCommentLikeArgs {

    @Field(() => CommentLikeUpdateManyMutationInput, {nullable:false})
    @Type(() => CommentLikeUpdateManyMutationInput)
    data!: CommentLikeUpdateManyMutationInput;

    @Field(() => CommentLikeWhereInput, {nullable:true})
    @Type(() => CommentLikeWhereInput)
    where?: CommentLikeWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
