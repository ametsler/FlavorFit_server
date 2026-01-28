import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeViewWhereInput } from './recipe-view-where.input';
import { Type } from 'class-transformer';
import { RecipeViewOrderByWithAggregationInput } from './recipe-view-order-by-with-aggregation.input';
import { RecipeViewScalarFieldEnum } from './recipe-view-scalar-field.enum';
import { RecipeViewScalarWhereWithAggregatesInput } from './recipe-view-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RecipeViewCountAggregateInput } from './recipe-view-count-aggregate.input';
import { RecipeViewMinAggregateInput } from './recipe-view-min-aggregate.input';
import { RecipeViewMaxAggregateInput } from './recipe-view-max-aggregate.input';

@ArgsType()
export class RecipeViewGroupByArgs {

    @Field(() => RecipeViewWhereInput, {nullable:true})
    @Type(() => RecipeViewWhereInput)
    where?: RecipeViewWhereInput;

    @Field(() => [RecipeViewOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RecipeViewOrderByWithAggregationInput>;

    @Field(() => [RecipeViewScalarFieldEnum], {nullable:false})
    by!: Array<`${RecipeViewScalarFieldEnum}`>;

    @Field(() => RecipeViewScalarWhereWithAggregatesInput, {nullable:true})
    having?: RecipeViewScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RecipeViewCountAggregateInput, {nullable:true})
    _count?: RecipeViewCountAggregateInput;

    @Field(() => RecipeViewMinAggregateInput, {nullable:true})
    _min?: RecipeViewMinAggregateInput;

    @Field(() => RecipeViewMaxAggregateInput, {nullable:true})
    _max?: RecipeViewMaxAggregateInput;
}
