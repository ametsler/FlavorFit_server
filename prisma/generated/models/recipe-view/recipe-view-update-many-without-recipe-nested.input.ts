import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeViewCreateWithoutRecipeInput } from './recipe-view-create-without-recipe.input';
import { Type } from 'class-transformer';
import { RecipeViewCreateOrConnectWithoutRecipeInput } from './recipe-view-create-or-connect-without-recipe.input';
import { RecipeViewUpsertWithWhereUniqueWithoutRecipeInput } from './recipe-view-upsert-with-where-unique-without-recipe.input';
import { RecipeViewCreateManyRecipeInputEnvelope } from './recipe-view-create-many-recipe-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeViewWhereUniqueInput } from './recipe-view-where-unique.input';
import { RecipeViewUpdateWithWhereUniqueWithoutRecipeInput } from './recipe-view-update-with-where-unique-without-recipe.input';
import { RecipeViewUpdateManyWithWhereWithoutRecipeInput } from './recipe-view-update-many-with-where-without-recipe.input';
import { RecipeViewScalarWhereInput } from './recipe-view-scalar-where.input';

@InputType()
export class RecipeViewUpdateManyWithoutRecipeNestedInput {

    @Field(() => [RecipeViewCreateWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeViewCreateWithoutRecipeInput)
    create?: Array<RecipeViewCreateWithoutRecipeInput>;

    @Field(() => [RecipeViewCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeViewCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<RecipeViewCreateOrConnectWithoutRecipeInput>;

    @Field(() => [RecipeViewUpsertWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeViewUpsertWithWhereUniqueWithoutRecipeInput)
    upsert?: Array<RecipeViewUpsertWithWhereUniqueWithoutRecipeInput>;

    @Field(() => RecipeViewCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => RecipeViewCreateManyRecipeInputEnvelope)
    createMany?: RecipeViewCreateManyRecipeInputEnvelope;

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

    @Field(() => [RecipeViewUpdateWithWhereUniqueWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeViewUpdateWithWhereUniqueWithoutRecipeInput)
    update?: Array<RecipeViewUpdateWithWhereUniqueWithoutRecipeInput>;

    @Field(() => [RecipeViewUpdateManyWithWhereWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeViewUpdateManyWithWhereWithoutRecipeInput)
    updateMany?: Array<RecipeViewUpdateManyWithWhereWithoutRecipeInput>;

    @Field(() => [RecipeViewScalarWhereInput], {nullable:true})
    @Type(() => RecipeViewScalarWhereInput)
    deleteMany?: Array<RecipeViewScalarWhereInput>;
}
