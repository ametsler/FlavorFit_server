import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { DishTypeWhereInput } from './dish-type-where.input';
import { Type } from 'class-transformer';
import { DishTypeOrderByWithRelationInput } from './dish-type-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { DishTypeWhereUniqueInput } from './dish-type-where-unique.input';
import { Int } from '@nestjs/graphql';
import { DishTypeCountAggregateInput } from './dish-type-count-aggregate.input';
import { DishTypeAvgAggregateInput } from './dish-type-avg-aggregate.input';
import { DishTypeSumAggregateInput } from './dish-type-sum-aggregate.input';
import { DishTypeMinAggregateInput } from './dish-type-min-aggregate.input';
import { DishTypeMaxAggregateInput } from './dish-type-max-aggregate.input';

@ArgsType()
export class DishTypeAggregateArgs {

    @Field(() => DishTypeWhereInput, {nullable:true})
    @Type(() => DishTypeWhereInput)
    where?: DishTypeWhereInput;

    @Field(() => [DishTypeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<DishTypeOrderByWithRelationInput>;

    @Field(() => DishTypeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<DishTypeWhereUniqueInput, 'id'>;

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
