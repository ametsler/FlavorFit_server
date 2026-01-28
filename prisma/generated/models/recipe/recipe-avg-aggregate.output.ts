import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace'
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class RecipeAvgAggregate {

    @Field(() => Float, {nullable:true})
    prepTime?: number;

    @Field(() => Float, {nullable:true})
    cookTime?: number;

    @Field(() => Float, {nullable:true})
    calories?: number;

    @Field(() => Float, {nullable:true})
    protein?: number;

    @Field(() => Float, {nullable:true})
    fats?: number;

    @Field(() => Float, {nullable:true})
    fiber?: number;

    @Field(() => GraphQLDecimal, {nullable:true})
    rating?: Decimal;
}
