import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RecipeViewCountAggregate } from './recipe-view-count-aggregate.output';
import { RecipeViewMinAggregate } from './recipe-view-min-aggregate.output';
import { RecipeViewMaxAggregate } from './recipe-view-max-aggregate.output';

@ObjectType()
export class AggregateRecipeView {

    @Field(() => RecipeViewCountAggregate, {nullable:true})
    _count?: RecipeViewCountAggregate;

    @Field(() => RecipeViewMinAggregate, {nullable:true})
    _min?: RecipeViewMinAggregate;

    @Field(() => RecipeViewMaxAggregate, {nullable:true})
    _max?: RecipeViewMaxAggregate;
}
