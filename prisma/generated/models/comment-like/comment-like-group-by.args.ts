import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentLikeWhereInput } from './comment-like-where.input';
import { Type } from 'class-transformer';
import { CommentLikeOrderByWithAggregationInput } from './comment-like-order-by-with-aggregation.input';
import { CommentLikeScalarFieldEnum } from './comment-like-scalar-field.enum';
import { CommentLikeScalarWhereWithAggregatesInput } from './comment-like-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { CommentLikeCountAggregateInput } from './comment-like-count-aggregate.input';
import { CommentLikeMinAggregateInput } from './comment-like-min-aggregate.input';
import { CommentLikeMaxAggregateInput } from './comment-like-max-aggregate.input';

@ArgsType()
export class CommentLikeGroupByArgs {

    @Field(() => CommentLikeWhereInput, {nullable:true})
    @Type(() => CommentLikeWhereInput)
    where?: CommentLikeWhereInput;

    @Field(() => [CommentLikeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<CommentLikeOrderByWithAggregationInput>;

    @Field(() => [CommentLikeScalarFieldEnum], {nullable:false})
    by!: Array<`${CommentLikeScalarFieldEnum}`>;

    @Field(() => CommentLikeScalarWhereWithAggregatesInput, {nullable:true})
    having?: CommentLikeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => CommentLikeCountAggregateInput, {nullable:true})
    _count?: CommentLikeCountAggregateInput;

    @Field(() => CommentLikeMinAggregateInput, {nullable:true})
    _min?: CommentLikeMinAggregateInput;

    @Field(() => CommentLikeMaxAggregateInput, {nullable:true})
    _max?: CommentLikeMaxAggregateInput;
}
