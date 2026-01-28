import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { EnumUnitWithAggregatesFilter } from '../prisma/enum-unit-with-aggregates-filter.input';
import { DecimalWithAggregatesFilter } from '../prisma/decimal-with-aggregates-filter.input';
import { DateTimeWithAggregatesFilter } from '../prisma/date-time-with-aggregates-filter.input';

@InputType()
export class IngredientScalarWhereWithAggregatesInput {

    @Field(() => [IngredientScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => IngredientScalarWhereWithAggregatesInput)
    AND?: Array<IngredientScalarWhereWithAggregatesInput>;

    @Field(() => [IngredientScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => IngredientScalarWhereWithAggregatesInput)
    OR?: Array<IngredientScalarWhereWithAggregatesInput>;

    @Field(() => [IngredientScalarWhereWithAggregatesInput], {nullable:true})
    @Type(() => IngredientScalarWhereWithAggregatesInput)
    NOT?: Array<IngredientScalarWhereWithAggregatesInput>;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    id?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    iconUrl?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    name?: StringWithAggregatesFilter;

    @Field(() => EnumUnitWithAggregatesFilter, {nullable:true})
    unit?: EnumUnitWithAggregatesFilter;

    @Field(() => DecimalWithAggregatesFilter, {nullable:true})
    @Type(() => DecimalWithAggregatesFilter)
    price?: DecimalWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    createdAt?: DateTimeWithAggregatesFilter;

    @Field(() => DateTimeWithAggregatesFilter, {nullable:true})
    updatedAt?: DateTimeWithAggregatesFilter;
}
