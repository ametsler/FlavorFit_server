import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeLikeCreateWithoutRecipeInput } from './recipe-like-create-without-recipe.input';
import { Type } from 'class-transformer';
import { RecipeLikeCreateOrConnectWithoutRecipeInput } from './recipe-like-create-or-connect-without-recipe.input';
import { RecipeLikeUpsertWithWhereUniqueWithoutRecipeInput } from './recipe-like-upsert-with-where-unique-without-recipe.input';
import { RecipeLikeCreateManyRecipeInputEnvelope } from './recipe-like-create-many-recipe-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeLikeWhereUniqueInput } from './recipe-like-where-unique.input';
import { RecipeLikeUpdateWithWhereUniqueWithoutRecipeInput } from './recipe-like-update-with-where-unique-without-recipe.input';
import { RecipeLikeUpdateManyWithWhereWithoutRecipeInput } from './recipe-like-update-many-with-where-without-recipe.input';
import { RecipeLikeScalarWhereInput } from './recipe-like-scalar-where.input';

@InputType()
export class RecipeLikeUpdateManyWithoutRecipeNestedInput {

    @Field(() => [RecipeLikeCreateWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeLikeCreateWithoutRecipeInput)
    create?: Array<RecipeLikeCreateWithoutRecipeInput>;

    @Field(() => [RecipeLikeCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeLikeCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<RecipeLikeCreateOrConnectWithoutRecipeInput>;

    @Field(() => [RecipeLikeUpsertWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeLikeUpsertWithWhereUniqueWithoutRecipeInput)
    upsert?: Array<RecipeLikeUpsertWithWhereUniqueWithoutRecipeInput>;

    @Field(() => RecipeLikeCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => RecipeLikeCreateManyRecipeInputEnvelope)
    createMany?: RecipeLikeCreateManyRecipeInputEnvelope;

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

    @Field(() => [RecipeLikeUpdateWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeLikeUpdateWithWhereUniqueWithoutRecipeInput)
    update?: Array<RecipeLikeUpdateWithWhereUniqueWithoutRecipeInput>;

    @Field(() => [RecipeLikeUpdateManyWithWhereWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeLikeUpdateManyWithWhereWithoutRecipeInput)
    updateMany?: Array<RecipeLikeUpdateManyWithWhereWithoutRecipeInput>;

    @Field(() => [RecipeLikeScalarWhereInput], {nullable:true})
    @Type(() => RecipeLikeScalarWhereInput)
    deleteMany?: Array<RecipeLikeScalarWhereInput>;
}
