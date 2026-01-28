import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeViewWhereInput } from './recipe-view-where.input';
import { Type } from 'class-transformer';
import { RecipeViewOrderByWithRelationInput } from './recipe-view-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeViewWhereUniqueInput } from './recipe-view-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecipeViewCountAggregateInput } from './recipe-view-count-aggregate.input';
import { RecipeViewMinAggregateInput } from './recipe-view-min-aggregate.input';
import { RecipeViewMaxAggregateInput } from './recipe-view-max-aggregate.input';

@ArgsType()
export class RecipeViewAggregateArgs {

    @Field(() => RecipeViewWhereInput, {nullable:true})
    @Type(() => RecipeViewWhereInput)
    where?: RecipeViewWhereInput;

    @Field(() => [RecipeViewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipeViewOrderByWithRelationInput>;

    @Field(() => RecipeViewWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RecipeViewWhereUniqueInput, 'id' | 'recipeId_userId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RecipeViewCountAggregateInput, {nullable:true})
    _count?: RecipeViewCountAggregateInput;

    @Field(() => RecipeViewMinAggregateInput, {nullable:true})
    _min?: RecipeViewMinAggregateInput;

    @Field(() => RecipeViewMaxAggregateInput, {nullable:true})
    _max?: RecipeViewMaxAggregateInput;
}
