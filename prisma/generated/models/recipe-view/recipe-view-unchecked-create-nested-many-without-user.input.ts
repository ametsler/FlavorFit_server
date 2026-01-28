import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeViewCreateWithoutUserInput } from './recipe-view-create-without-user.input';
import { Type } from 'class-transformer';
import { RecipeViewCreateOrConnectWithoutUserInput } from './recipe-view-create-or-connect-without-user.input';
import { RecipeViewCreateManyUserInputEnvelope } from './recipe-view-create-many-user-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeViewWhereUniqueInput } from './recipe-view-where-unique.input';

@InputType()
export class RecipeViewUncheckedCreateNestedManyWithoutUserInput {

    @Field(() => [RecipeViewCreateWithoutUserInput], {nullable:true})
    @Type(() => RecipeViewCreateWithoutUserInput)
    create?: Array<RecipeViewCreateWithoutUserInput>;

    @Field(() => [RecipeViewCreateOrConnectWithoutUserInput], {nullable:true})
    @Type(() => RecipeViewCreateOrConnectWithoutUserInput)
    connectOrCreate?: Array<RecipeViewCreateOrConnectWithoutUserInput>;

    @Field(() => RecipeViewCreateManyUserInputEnvelope, {nullable:true})
    @Type(() => RecipeViewCreateManyUserInputEnvelope)
    createMany?: RecipeViewCreateManyUserInputEnvelope;

    @Field(() => [RecipeViewWhereUniqueInput], {nullable:true})
    @Type(() => RecipeViewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeViewWhereUniqueInput, 'id' | 'recipeId_userId'>>;
}
