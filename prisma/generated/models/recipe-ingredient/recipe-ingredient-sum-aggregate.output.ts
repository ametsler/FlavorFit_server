import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace'
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class RecipeIngredientSumAggregate {

    @Field(() => GraphQLDecimal, {nullable:true})
    quantity?: Decimal;
}
