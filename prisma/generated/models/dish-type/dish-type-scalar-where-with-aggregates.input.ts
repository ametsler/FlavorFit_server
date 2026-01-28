import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class DishTypeScalarWhereWithAggregatesInput {

    @Field(() => [DishTypeScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<DishTypeScalarWhereWithAggregatesInput>;

    @Field(() => [DishTypeScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<DishTypeScalarWhereWithAggregatesInput>;

    @Field(() => [DishTypeScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<DishTypeScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    order?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
