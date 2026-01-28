import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class RecipeViewScalarWhereWithAggregatesInput {

    @Field(() => [RecipeViewScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<RecipeViewScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeViewScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<RecipeViewScalarWhereWithAggregatesInput>;

    @Field(() => [RecipeViewScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<RecipeViewScalarWhereWithAggregatesInput>;

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
