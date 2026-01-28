import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeLikeCreateWithoutUserInput } from './recipe-like-create-without-user.input';
import { Type } from 'class-transformer';
import { RecipeLikeCreateOrConnectWithoutUserInput } from './recipe-like-create-or-connect-without-user.input';
import { RecipeLikeUpsertWithWhereUniqueWithoutUserInput } from './recipe-like-upsert-with-where-unique-without-user.input';
import { RecipeLikeCreateManyUserInputEnvelope } from './recipe-like-create-many-user-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeLikeWhereUniqueInput } from './recipe-like-where-unique.input';
import { RecipeLikeUpdateWithWhereUniqueWithoutUserInput } from './recipe-like-update-with-where-unique-without-user.input';
import { RecipeLikeUpdateManyWithWhereWithoutUserInput } from './recipe-like-update-many-with-where-without-user.input';
import { RecipeLikeScalarWhereInput } from './recipe-like-scalar-where.input';

@InputType()
export class RecipeLikeUpdateManyWithoutUserNestedInput {

    @Field(() => [RecipeLikeCreateWithoutUserInput], {nullable:true})
    @Type(() => RecipeLikeCreateWithoutUserInput)
    create?: Array<RecipeLikeCreateWithoutUserInput>;

    @Field(() => [RecipeLikeCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => RecipeLikeCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<RecipeLikeCreateOrConnectWithoutUserInput>;

    @Field(() => [RecipeLikeUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => RecipeLikeUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<RecipeLikeUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => RecipeLikeCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => RecipeLikeCreateManyUserInputEnvelope)
    createMany?: RecipeLikeCreateManyUserInputEnvelope;

    @Field(() => [RecipeLikeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeLikeWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RecipeLikeWhereUniqueInput, 'id' | 'recipeId_userId'>>;

    @Field(() => [RecipeLikeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeLikeWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RecipeLikeWhereUniqueInput, 'id' | 'recipeId_userId'>>;

    @Field(() => [RecipeLikeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeLikeWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RecipeLikeWhereUniqueInput, 'id' | 'recipeId_userId'>>;

    @Field(() => [RecipeLikeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeLikeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeLikeWhereUniqueInput, 'id' | 'recipeId_userId'>>;

    @Field(() => [RecipeLikeUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => RecipeLikeUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<RecipeLikeUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [RecipeLikeUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => RecipeLikeUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<RecipeLikeUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [RecipeLikeScalarWhereInput], {nullable:true})
    @Type(() => RecipeLikeScalarWhereInput)
    deleteMany?: Array<RecipeLikeScalarWhereInput>;
}
