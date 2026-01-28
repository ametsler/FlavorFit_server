import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeLikeCreateWithoutUserInput } from './recipe-like-create-without-user.input';
import { Type } from 'class-transformer';
import { RecipeLikeCreateOrConnectWithoutUserInput } from './recipe-like-create-or-connect-without-user.input';
import { RecipeLikeCreateManyUserInputEnvelope } from './recipe-like-create-many-user-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeLikeWhereUniqueInput } from './recipe-like-where-unique.input';

@InputType()
export class RecipeLikeCreateNestedManyWithoutUserInput {

    @Field(() => [RecipeLikeCreateWithoutUserInput], {nullable:true})
    @Type(() => RecipeLikeCreateWithoutUserInput)
    create?: Array<RecipeLikeCreateWithoutUserInput>;

    @Field(() => [RecipeLikeCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => RecipeLikeCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<RecipeLikeCreateOrConnectWithoutUserInput>;

    @Field(() => RecipeLikeCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => RecipeLikeCreateManyUserInputEnvelope)
    createMany?: RecipeLikeCreateManyUserInputEnvelope;

    @Field(() => [RecipeLikeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeLikeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeLikeWhereUniqueInput, 'id' | 'recipeId_userId'>>;
}
