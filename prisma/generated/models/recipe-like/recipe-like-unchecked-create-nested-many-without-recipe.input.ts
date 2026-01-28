import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeLikeCreateWithoutRecipeInput } from './recipe-like-create-without-recipe.input';
import { Type } from 'class-transformer';
import { RecipeLikeCreateOrConnectWithoutRecipeInput } from './recipe-like-create-or-connect-without-recipe.input';
import { RecipeLikeCreateManyRecipeInputEnvelope } from './recipe-like-create-many-recipe-input-envelope.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeLikeWhereUniqueInput } from './recipe-like-where-unique.input';

@InputType()
export class RecipeLikeUncheckedCreateNestedManyWithoutRecipeInput {

    @Field(() => [RecipeLikeCreateWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeLikeCreateWithoutRecipeInput)
    create?: Array<RecipeLikeCreateWithoutRecipeInput>;

    @Field(() => [RecipeLikeCreateOrConnectWithoutRecipeInput], {nullable:true})
    @Type(() => RecipeLikeCreateOrConnectWithoutRecipeInput)
    connectOrCreate?: Array<RecipeLikeCreateOrConnectWithoutRecipeInput>;

    @Field(() => RecipeLikeCreateManyRecipeInputEnvelope, {nullable:true})
    @Type(() => RecipeLikeCreateManyRecipeInputEnvelope)
    createMany?: RecipeLikeCreateManyRecipeInputEnvelope;

    @Field(() => [RecipeLikeWhereUniqueInput], {nullable:true})
    @Type(() => RecipeLikeWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<RecipeLikeWhereUniqueInput, 'id' | 'recipeId_userId'>>;
}
