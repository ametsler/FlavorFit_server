import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace'
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { RecipeIngredientCountAggregate } from './recipe-ingredient-count-aggregate.output';
import { RecipeIngredientAvgAggregate } from './recipe-ingredient-avg-aggregate.output';
import { RecipeIngredientSumAggregate } from './recipe-ingredient-sum-aggregate.output';
import { RecipeIngredientMinAggregate } from './recipe-ingredient-min-aggregate.output';
import { RecipeIngredientMaxAggregate } from './recipe-ingredient-max-aggregate.output';

@ObjectType()
export class RecipeIngredientGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => GraphQLDecimal, {nullable:false})
    quantity!: Decimal;

    @Field(() => String, {nullable:false})
    recipeId!: string;

    @Field(() => String, {nullable:false})
    ingredientId!: string;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => RecipeIngredientCountAggregate, {nullable:true})
    _count?: RecipeIngredientCountAggregate;

    @Field(() => RecipeIngredientAvgAggregate, {nullable:true})
    _avg?: RecipeIngredientAvgAggregate;

    @Field(() => RecipeIngredientSumAggregate, {nullable:true})
    _sum?: RecipeIngredientSumAggregate;

    @Field(() => RecipeIngredientMinAggregate, {nullable:true})
    _min?: RecipeIngredientMinAggregate;

    @Field(() => RecipeIngredientMaxAggregate, {nullable:true})
    _max?: RecipeIngredientMaxAggregate;
}
