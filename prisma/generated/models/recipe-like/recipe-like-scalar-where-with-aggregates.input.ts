import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class RecipeLikeScalarWhereWithAggregatesInput {

    @Field(() => [RecipeLikeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RecipeLikeScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeLikeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RecipeLikeScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeLikeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RecipeLikeScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    recipeId?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    userId?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
