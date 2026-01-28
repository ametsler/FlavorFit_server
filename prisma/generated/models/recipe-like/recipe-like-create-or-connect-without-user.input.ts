import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeLikeWhereUniqueInput } from './recipe-like-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeLikeCreateWithoutUserInput } from './recipe-like-create-without-user.input';

@InputType()
export class RecipeLikeCreateOrConnectWithoutUserInput {

    @Field(() => RecipeLikeWhereUniqueInput, {nullable:false})
    @Type(() => RecipeLikeWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeLikeWhereUniqueInput, 'id' | 'recipeId_userId'>;

    @Field(() => RecipeLikeCreateWithoutUserInput, {nullable:false})
    @Type(() => RecipeLikeCreateWithoutUserInput)
    create!: RecipeLikeCreateWithoutUserInput;
}
