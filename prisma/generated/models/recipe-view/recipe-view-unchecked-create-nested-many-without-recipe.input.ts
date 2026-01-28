import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeViewCreateWithoutRecipeInput } from './recipe-view-create-without-recipe.input';
import { Type } from 'class-transformer';
import { RecipeViewCreateOrConnectWithoutRecipeInput } from './recipe-view-create-or-connect-without-recipe.input';
import { RecipeViewCreateManyRecipeInputEnvelope } from './recipe-view-create-many-recipe-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeViewWhereUniqueInput } from './recipe-view-where-unique.input';

@InputType()
export class RecipeViewUncheckedCreateNestedManyWithoutRecipeInput {

    @Field(() => [RecipeViewCreateWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeViewCreateWithoutRecipeInput)
    create?: Array<RecipeViewCreateWithoutRecipeInput>;

    @Field(() => [RecipeViewCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeViewCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<RecipeViewCreateOrConnectWithoutRecipeInput>;

    @Field(() => RecipeViewCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => RecipeViewCreateManyRecipeInputEnvelope)
    createMany?: RecipeViewCreateManyRecipeInputEnvelope;

    @Field(() => [RecipeViewWhereUniqueInput], {nullable:true})
    @Type(() => RecipeViewWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeViewWhereUniqueInput, 'id' | 'recipeId_userId'>>;
}
