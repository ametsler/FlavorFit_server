import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Difficulty } from '../prisma/difficulty.enum';
import { Int } from '@nestjs/graphql';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace'
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { RecipeCountAggregate } from './recipe-count-aggregate.output';
import { RecipeAvgAggregate } from './recipe-avg-aggregate.output';
import { RecipeSumAggregate } from './recipe-sum-aggregate.output';
import { RecipeMinAggregate } from './recipe-min-aggregate.output';
import { RecipeMaxAggregate } from './recipe-max-aggregate.output';

@ObjectType()
export class RecipeGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    cuisineType!: string;

    @Field(() => Difficulty, {nullable:false})
    difficulty!: `${Difficulty}`;

    @Field(() => Int, {nullable:false})
    prepTime!: number;

    @Field(() => Int, {nullable:false})
    cookTime!: number;

    @Field(() => Int, {nullable:true})
    calories?: number;

    @Field(() => Int, {nullable:true})
    protein?: number;

    @Field(() => Int, {nullable:true})
    fats?: number;

    @Field(() => Int, {nullable:true})
    fiber?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    rating?: Decimal;

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => String, {nullable:false})
    dishTypeId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => RecipeCountAggregate, {nullable:true})
    _count?: RecipeCountAggregate;

    @Field(() => RecipeAvgAggregate, {nullable:true})
    _avg?: RecipeAvgAggregate;

    @Field(() => RecipeSumAggregate, {nullable:true})
    _sum?: RecipeSumAggregate;

    @Field(() => RecipeMinAggregate, {nullable:true})
    _min?: RecipeMinAggregate;

    @Field(() => RecipeMaxAggregate, {nullable:true})
    _max?: RecipeMaxAggregate;
}
