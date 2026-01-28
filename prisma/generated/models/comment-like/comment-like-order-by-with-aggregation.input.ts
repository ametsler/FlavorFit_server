import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { CommentLikeCountOrderByAggregateInput } from './comment-like-count-order-by-aggregate.input';
import { CommentLikeMaxOrderByAggregateInput } from './comment-like-max-order-by-aggregate.input';
import { CommentLikeMinOrderByAggregateInput } from './comment-like-min-order-by-aggregate.input';

@InputType()
export class CommentLikeOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    commentId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    userId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    updatedAt?: `${SortOrder}`;

    @Field(() => CommentLikeCountOrderByAggregateInput, {nullable:true})
    _count?: CommentLikeCountOrderByAggregateInput;

    @Field(() => CommentLikeMaxOrderByAggregateInput, {nullable:true})
    _max?: CommentLikeMaxOrderByAggregateInput;

    @Field(() => CommentLikeMinOrderByAggregateInput, {nullable:true})
    _min?: CommentLikeMinOrderByAggregateInput;
}
