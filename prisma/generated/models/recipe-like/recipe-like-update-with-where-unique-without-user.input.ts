import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeLikeWhereUniqueInput } from './recipe-like-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeLikeUpdateWithoutUserInput } from './recipe-like-update-without-user.input';

@InputType()
export class RecipeLikeUpdateWithWhereUniqueWithoutUserInput {

    @Field(() => RecipeLikeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeLikeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeLikeWhereUniqueInput, 'id' | 'recipeId_userId'>;

    @Field(() => RecipeLikeUpdateWithoutUserInput, {nullable:false})
    @Type(() => RecipeLikeUpdateWithoutUserInput)
    data!: RecipeLikeUpdateWithoutUserInput;
}
