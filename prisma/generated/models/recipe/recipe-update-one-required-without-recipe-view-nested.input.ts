import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateWithoutRecipeViewInput } from './recipe-create-without-recipe-view.input';
import { Type } from 'class-transformer';
import { RecipeCreateOrConnectWithoutRecipeViewInput } from './recipe-create-or-connect-without-recipe-view.input';
import { RecipeUpsertWithoutRecipeViewInput } from './recipe-upsert-without-recipe-view.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeWhereUniqueInput } from './recipe-where-unique.input';
import { RecipeUpdateToOneWithWhereWithoutRecipeViewInput } from './recipe-update-to-one-with-where-without-recipe-view.input';

@InputType()
export class RecipeUpdateOneRequiredWithoutRecipeViewNestedInput {

    @Field(() => RecipeCreateWithoutRecipeViewInput, {nullable:true})
    @Type(() => RecipeCreateWithoutRecipeViewInput)
    create?: RecipeCreateWithoutRecipeViewInput;

    @Field(() => RecipeCreateOrConnectWithoutRecipeViewInput, {nullable:true})
    @Type(() => RecipeCreateOrConnectWithoutRecipeViewInput)
    connectOrCreate?: RecipeCreateOrConnectWithoutRecipeViewInput;

    @Field(() => RecipeUpsertWithoutRecipeViewInput, {nullable:true})
    @Type(() => RecipeUpsertWithoutRecipeViewInput)
    upsert?: RecipeUpsertWithoutRecipeViewInput;

    @Field(() => RecipeWhereUniqueInput, {nullable:true})
    @Type(() => RecipeWhereUniqueInput)
    connect?: Prisma.AtLeast<RecipeWhereUniqueInput, 'id'>;

    @Field(() => RecipeUpdateToOneWithWhereWithoutRecipeViewInput, {nullable:true})
    @Type(() => RecipeUpdateToOneWithWhereWithoutRecipeViewInput)
    update?: RecipeUpdateToOneWithWhereWithoutRecipeViewInput;
}
