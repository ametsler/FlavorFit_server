import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeViewCreateWithoutUserInput } from './recipe-view-create-without-user.input';
import { Type } from 'class-transformer';
import { RecipeViewCreateOrConnectWithoutUserInput } from './recipe-view-create-or-connect-without-user.input';
import { RecipeViewUpsertWithWhereUniqueWithoutUserInput } from './recipe-view-upsert-with-where-unique-without-user.input';
import { RecipeViewCreateManyUserInputEnvelope } from './recipe-view-create-many-user-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeViewWhereUniqueInput } from './recipe-view-where-unique.input';
import { RecipeViewUpdateWithWhereUniqueWithoutUserInput } from './recipe-view-update-with-where-unique-without-user.input';
import { RecipeViewUpdateManyWithWhereWithoutUserInput } from './recipe-view-update-many-with-where-without-user.input';
import { RecipeViewScalarWhereInput } from './recipe-view-scalar-where.input';

@InputType()
export class RecipeViewUpdateManyWithoutUserNestedInput {

    @Field(() => [RecipeViewCreateWithoutUserInput], {nullable:true})
    @Type(() => RecipeViewCreateWithoutUserInput)
    create?: Array<RecipeViewCreateWithoutUserInput>;

    @Field(() => [RecipeViewCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => RecipeViewCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<RecipeViewCreateOrConnectWithoutUserInput>;

    @Field(() => [RecipeViewUpsertWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => RecipeViewUpsertWithWhereUniqueWithoutUserInput)
    upsert?: Array<RecipeViewUpsertWithWhereUniqueWithoutUserInput>;

    @Field(() => RecipeViewCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => RecipeViewCreateManyUserInputEnvelope)
    createMany?: RecipeViewCreateManyUserInputEnvelope;

    @Field(() => [RecipeViewWhereUniqueInput], {nullable:true})
    @Type(() => RecipeViewWhereUniqueInput)
    set?: Array<Prisma.AtLeast<RecipeViewWhereUniqueInput, 'id' | 'recipeId_userId'>>;

    @Field(() => [RecipeViewWhereUniqueInput], {nullable:true})
    @Type(() => RecipeViewWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<RecipeViewWhereUniqueInput, 'id' | 'recipeId_userId'>>;

    @Field(() => [RecipeViewWhereUniqueInput], {nullable:true})
    @Type(() => RecipeViewWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<RecipeViewWhereUniqueInput, 'id' | 'recipeId_userId'>>;

    @Field(() => [RecipeViewWhereUniqueInput], {nullable:true})
    @Type(() => RecipeViewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeViewWhereUniqueInput, 'id' | 'recipeId_userId'>>;

    @Field(() => [RecipeViewUpdateWithWhereUniqueWithoutUserInput], {nullable:true})
    @Type(() => RecipeViewUpdateWithWhereUniqueWithoutUserInput)
    update?: Array<RecipeViewUpdateWithWhereUniqueWithoutUserInput>;

    @Field(() => [RecipeViewUpdateManyWithWhereWithoutUserInput], {nullable:true})
    @Type(() => RecipeViewUpdateManyWithWhereWithoutUserInput)
    updateMany?: Array<RecipeViewUpdateManyWithWhereWithoutUserInput>;

    @Field(() => [RecipeViewScalarWhereInput], {nullable:true})
    @Type(() => RecipeViewScalarWhereInput)
    deleteMany?: Array<RecipeViewScalarWhereInput>;
}
