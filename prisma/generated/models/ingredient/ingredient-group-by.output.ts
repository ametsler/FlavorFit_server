import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Unit } from '../prisma/unit.enum';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace'
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { IngredientCountAggregate } from './ingredient-count-aggregate.output';
import { IngredientAvgAggregate } from './ingredient-avg-aggregate.output';
import { IngredientSumAggregate } from './ingredient-sum-aggregate.output';
import { IngredientMinAggregate } from './ingredient-min-aggregate.output';
import { IngredientMaxAggregate } from './ingredient-max-aggregate.output';

@ObjectType()
export class IngredientGroupBy {

    @Field(() => String, {nullable:false})
    id!: string;

    @Field(() => String, {nullable:false})
    iconUrl!: string;

    @Field(() => String, {nullable:false})
    name!: string;

    @Field(() => Unit, {nullable:false})
    unit!: `${Unit}`;

    @Field(() => GraphQLDecimal, {nullable:false})
    price!: Decimal;

    @Field(() => Date, {nullable:false})
    createdAt!: Date | string;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date | string;

    @Field(() => IngredientCountAggregate, {nullable:true})
    _count?: IngredientCountAggregate;

    @Field(() => IngredientAvgAggregate, {nullable:true})
    _avg?: IngredientAvgAggregate;

    @Field(() => IngredientSumAggregate, {nullable:true})
    _sum?: IngredientSumAggregate;

    @Field(() => IngredientMinAggregate, {nullable:true})
    _min?: IngredientMinAggregate;

    @Field(() => IngredientMaxAggregate, {nullable:true})
    _max?: IngredientMaxAggregate;
}
