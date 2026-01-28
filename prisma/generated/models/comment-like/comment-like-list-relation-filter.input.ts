import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentLikeWhereInput } from './comment-like-where.input';

@InputType()
export class CommentLikeListRelationFilter {

    @Field(() => CommentLikeWhereInput, {nullable:true})
    every?: CommentLikeWhereInput;

    @Field(() => CommentLikeWhereInput, {nullable:true})
    some?: CommentLikeWhereInput;

    @Field(() => CommentLikeWhereInput, {nullable:true})
    none?: CommentLikeWhereInput;
}
