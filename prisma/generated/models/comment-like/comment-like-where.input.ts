import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { CommentScalarRelationFilter } from '../comment/comment-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';

@InputType()
export class CommentLikeWhereInput {

    @Field(() => [CommentLikeWhereInput], {nullable:true})
    AND?: Array<CommentLikeWhereInput>;

    @Field(() => [CommentLikeWhereInput], {nullable:true})
    OR?: Array<CommentLikeWhereInput>;

    @Field(() => [CommentLikeWhereInput], {nullable:true})
    NOT?: Array<CommentLikeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    commentId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => CommentScalarRelationFilter, {nullable:true})
    @Type(() => CommentScalarRelationFilter)
    comment?: CommentScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    @Type(() => UserScalarRelationFilter)
    user?: UserScalarRelationFilter;
}
