import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeLikeWhereInput } from './recipe-like-where.input';
import { Type } from 'class-transformer';
import { RecipeLikeOrderByWithRelationInput } from './recipe-like-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeLikeWhereUniqueInput } from './recipe-like-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecipeLikeScalarFieldEnum } from './recipe-like-scalar-field.enum';

@ArgsType()
export class FindFirstRecipeLikeArgs {

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

    @Field(() => [RecipeLikeScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RecipeLikeScalarFieldEnum}`>;
}
