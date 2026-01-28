import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class CommentLikeScalarWhereInput {

    @Field(() => [CommentLikeScalarWhereInput], {nullable:true})
    AND?: Array<CommentLikeScalarWhereInput>;

    @Field(() => [CommentLikeScalarWhereInput], {nullable:true})
    OR?: Array<CommentLikeScalarWhereInput>;

    @Field(() => [CommentLikeScalarWhereInput], {nullable:true})
    NOT?: Array<CommentLikeScalarWhereInput>;

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
}
