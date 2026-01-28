import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeLikeWhereInput } from './recipe-like-where.input';
import { Type } from 'class-transformer';
import { RecipeLikeOrderByWithRelationInput } from './recipe-like-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeLikeWhereUniqueInput } from './recipe-like-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecipeLikeCountAggregateInput } from './recipe-like-count-aggregate.input';
import { RecipeLikeMinAggregateInput } from './recipe-like-min-aggregate.input';
import { RecipeLikeMaxAggregateInput } from './recipe-like-max-aggregate.input';

@ArgsType()
export class RecipeLikeAggregateArgs {

    @Field(() => RecipeLikeWhereInput, {nullable:true})
    @Type(() => RecipeLikeWhereInput)
    where?: RecipeLikeWhereInput;

    @Field(() => [RecipeLikeOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipeLikeOrderByWithRelationInput>;

    @Field(() => RecipeLikeWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RecipeLikeWhereUniqueInput, 'id' | 'recipeId_userId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => RecipeLikeCountAggregateInput, {nullable:true})
    _count?: RecipeLikeCountAggregateInput;

    @Field(() => RecipeLikeMinAggregateInput, {nullable:true})
    _min?: RecipeLikeMinAggregateInput;

    @Field(() => RecipeLikeMaxAggregateInput, {nullable:true})
    _max?: RecipeLikeMaxAggregateInput;
}
