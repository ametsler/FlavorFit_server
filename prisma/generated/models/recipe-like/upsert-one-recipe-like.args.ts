import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeLikeWhereUniqueInput } from './recipe-like-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeLikeCreateInput } from './recipe-like-create.input';
import { RecipeLikeUpdateInput } from './recipe-like-update.input';

@ArgsType()
export class UpsertOneRecipeLikeArgs {

    @Field(() => RecipeLikeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeLikeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeLikeWhereUniqueInput, 'id' | 'recipeId_userId'>;

    @Field(() => RecipeLikeCreateInput, {nullable:false})
    @Type(() => RecipeLikeCreateInput)
    create!: RecipeLikeCreateInput;

    @Field(() => RecipeLikeUpdateInput, {nullable:false})
    @Type(() => RecipeLikeUpdateInput)
    update!: RecipeLikeUpdateInput;
}
