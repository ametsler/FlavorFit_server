import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { CommentLikeCountAggregate } from './comment-like-count-aggregate.output';
import { CommentLikeMinAggregate } from './comment-like-min-aggregate.output';
import { CommentLikeMaxAggregate } from './comment-like-max-aggregate.output';

@ObjectType()
export class AggregateCommentLike {

    @Field(() => CommentLikeCountAggregate, {nullable:true})
    _count?: CommentLikeCountAggregate;

    @Field(() => CommentLikeMinAggregate, {nullable:true})
    _min?: CommentLikeMinAggregate;

    @Field(() => CommentLikeMaxAggregate, {nullable:true})
    _max?: CommentLikeMaxAggregate;
}
