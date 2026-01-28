import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeLikeWhereInput } from './recipe-like-where.input';
import { Type } from 'class-transformer';
import { RecipeLikeOrderByWithAggregationInput } from './recipe-like-order-by-with-aggregation.input';
import { RecipeLikeScalarFieldEnum } from './recipe-like-scalar-field.enum';
import { RecipeLikeScalarWhereWithAggregatesInput } from './recipe-like-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { RecipeLikeCountAggregateInput } from './recipe-like-count-aggregate.input';
import { RecipeLikeMinAggregateInput } from './recipe-like-min-aggregate.input';
import { RecipeLikeMaxAggregateInput } from './recipe-like-max-aggregate.input';

@ArgsType()
export class RecipeLikeGroupByArgs {

    @Field(() => RecipeLikeWhereInput, {nullable:true})
    @Type(() => RecipeLikeWhereInput)
    where?: RecipeLikeWhereInput;

    @Field(() => [RecipeLikeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<RecipeLikeOrderByWithAggregationInput>;

    @Field(() => [RecipeLikeScalarFieldEnum], {nullable:false})
    by!: Array<`${RecipeLikeScalarFieldEnum}`>;

    @Field(() => RecipeLikeScalarWhereWithAggregatesInput, {nullable:true})
    having?: RecipeLikeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RecipeLikeCountAggregateInput, {nullable:true})
    _count?: RecipeLikeCountAggregateInput;

    @Field(() => RecipeLikeMinAggregateInput, {nullable:true})
    _min?: RecipeLikeMinAggregateInput;

    @Field(() => RecipeLikeMaxAggregateInput, {nullable:true})
    _max?: RecipeLikeMaxAggregateInput;
}
