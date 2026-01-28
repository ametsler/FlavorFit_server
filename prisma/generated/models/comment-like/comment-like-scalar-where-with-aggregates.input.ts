import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class CommentLikeScalarWhereWithAggregatesInput {

    @Field(() => [CommentLikeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<CommentLikeScalarWhereWithAggregatesInput>;

    @Field(() => [CommentLikeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<CommentLikeScalarWhereWithAggregatesInput>;

    @Field(() => [CommentLikeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<CommentLikeScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    commentId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
