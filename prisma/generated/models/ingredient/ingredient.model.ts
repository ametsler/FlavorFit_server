import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Unit } from '../prisma/unit.enum';
import { GraphQLDecimal } from 'prisma-graphql-type-decimal';
import { Decimal } from 'prisma/generated/prisma/internal/prismaNamespace'
import { RecipeIngredient } from '../recipe-ingredient/recipe-ingredient.model';
import { OrderItem } from '../order-item/order-item.model';

@ObjectType()
export class Ingredient {

    @Field(() => ID, {nullable:false})
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
    createdAt!: Date;

    @Field(() => Date, {nullable:false})
    updatedAt!: Date;

    @Field(() => [RecipeIngredient], {nullable:true})
    recipes?: Array<RecipeIngredient>;

    @Field(() => [OrderItem], {nullable:true})
    orderItems?: Array<OrderItem>;
}
