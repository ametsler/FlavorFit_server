import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishTypeWhereInput } from './dish-type-where.input';
import { Type } from 'class-transformer';
import { DishTypeOrderByWithAggregationInput } from './dish-type-order-by-with-aggregation.input';
import { DishTypeScalarFieldEnum } from './dish-type-scalar-field.enum';
import { DishTypeScalarWhereWithAggregatesInput } from './dish-type-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { DishTypeCountAggregateInput } from './dish-type-count-aggregate.input';
import { DishTypeAvgAggregateInput } from './dish-type-avg-aggregate.input';
import { DishTypeSumAggregateInput } from './dish-type-sum-aggregate.input';
import { DishTypeMinAggregateInput } from './dish-type-min-aggregate.input';
import { DishTypeMaxAggregateInput } from './dish-type-max-aggregate.input';

@ArgsType()
export class DishTypeGroupByArgs {

    @Field(() => DishTypeWhereInput, {nullable:true})
    @Type(() => DishTypeWhereInput)
    where?: DishTypeWhereInput;

    @Field(() => [DishTypeOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<DishTypeOrderByWithAggregationInput>;

    @Field(() => [DishTypeScalarFieldEnum], {nullable:false})
    by!: Array<`${DishTypeScalarFieldEnum}`>;

    @Field(() => DishTypeScalarWhereWithAggregatesInput, {nullable:true})
    having?: DishTypeScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => DishTypeCountAggregateInput, {nullable:true})
    _count?: DishTypeCountAggregateInput;

    @Field(() => DishTypeAvgAggregateInput, {nullable:true})
    _avg?: DishTypeAvgAggregateInput;

    @Field(() => DishTypeSumAggregateInput, {nullable:true})
    _sum?: DishTypeSumAggregateInput;

    @Field(() => DishTypeMinAggregateInput, {nullable:true})
    _min?: DishTypeMinAggregateInput;

    @Field(() => DishTypeMaxAggregateInput, {nullable:true})
    _max?: DishTypeMaxAggregateInput;
}
