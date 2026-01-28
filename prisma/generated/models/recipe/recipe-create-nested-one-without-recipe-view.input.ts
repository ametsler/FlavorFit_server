import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutRecipeViewInput } from './recipe-create-without-recipe-view.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutRecipeViewInput } from './recipe-create-or-connect-without-recipe-view.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';

@InputType()
export class RecipeCreateNestedOneWithoutRecipeViewInput {

    @Field(() => RecipeCreateWithoutRecipeViewInput, {nullable:true})
    @Type(() => RecipeCreateWithoutRecipeViewInput)
    create?: RecipeCreateWithoutRecipeViewInput;

    @Field(() => RecipeCreateOrConnectWithoutRecipeViewInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutRecipeViewInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutRecipeViewInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;
}
