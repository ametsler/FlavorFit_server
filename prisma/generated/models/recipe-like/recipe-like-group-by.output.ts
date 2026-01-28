import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { RecipeLikeCountAggregate } from './recipe-like-count-aggregate.output';
import { RecipeLikeMinAggregate } from './recipe-like-min-aggregate.output';
import { RecipeLikeMaxAggregate } from './recipe-like-max-aggregate.output';

@ObjectType()
export class RecipeLikeGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    recipeId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => RecipeLikeCountAggregate, {nullable:true})
    _count?: RecipeLikeCountAggregate;

    @Field(() => RecipeLikeMinAggregate, {nullable:true})
    _min?: RecipeLikeMinAggregate;

    @Field(() => RecipeLikeMaxAggregate, {nullable:true})
    _max?: RecipeLikeMaxAggregate;
}
