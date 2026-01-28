import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Unit } from '../prisma/unit.enum';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace'
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';

@ObjectType()
export class IngredientMaxAggregate {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    iconUrl?: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Unit, {nullable:true})
    unit?: `${Unit}`;

    @Field(() => GraphQLDecimal, {nullable:true})
    price?: Decimal;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;
}
