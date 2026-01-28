import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeLikeUpdateInput } from './recipe-like-update.input';
import { Type } from 'class-transformer';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeLikeWhereUniqueInput } from './recipe-like-where-unique.input';

@ArgsType()
export class UpdateOneRecipeLikeArgs {

    @Field(() => RecipeLikeUpdateInput, {nullable:false})
    @Type(() => RecipeLikeUpdateInput)
    data!: RecipeLikeUpdateInput;

    @Field(() => RecipeLikeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeLikeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeLikeWhereUniqueInput, 'id' | 'recipeId_userId'>;
}
