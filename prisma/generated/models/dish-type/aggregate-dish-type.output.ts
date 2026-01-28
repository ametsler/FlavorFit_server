import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { DishTypeCountAggregate } from './dish-type-count-aggregate.output';
import { DishTypeAvgAggregate } from './dish-type-avg-aggregate.output';
import { DishTypeSumAggregate } from './dish-type-sum-aggregate.output';
import { DishTypeMinAggregate } from './dish-type-min-aggregate.output';
import { DishTypeMaxAggregate } from './dish-type-max-aggregate.output';

@ObjectType()
export class AggregateDishType {

    @Field(() => DishTypeCountAggregate, {nullable:true})
    _count?: DishTypeCountAggregate;

    @Field(() => DishTypeAvgAggregate, {nullable:true})
    _avg?: DishTypeAvgAggregate;

    @Field(() => DishTypeSumAggregate, {nullable:true})
    _sum?: DishTypeSumAggregate;

    @Field(() => DishTypeMinAggregate, {nullable:true})
    _min?: DishTypeMinAggregate;

    @Field(() => DishTypeMaxAggregate, {nullable:true})
    _max?: DishTypeMaxAggregate;
}
