import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeViewWhereUniqueInput } from './recipe-view-where-unique.input';
import { Type } from 'class-transformer';
import { RecipeViewUpdateWithoutUserInput } from './recipe-view-update-without-user.input';
import { RecipeViewCreateWithoutUserInput } from './recipe-view-create-without-user.input';

@InputType()
export class RecipeViewUpsertWithWhereUniqueWithoutUserInput {

    @Field(() => RecipeViewWhereUniqueInput, {nullable:false})
    @Type(() => RecipeViewWhereUniqueInput)
    where!: Prisma.AtLeast<RecipeViewWhereUniqueInput, 'id' | 'recipeId_userId'>;

    @Field(() => RecipeViewUpdateWithoutUserInput, {nullable:false})
    @Type(() => RecipeViewUpdateWithoutUserInput)
    update!: RecipeViewUpdateWithoutUserInput;

    @Field(() => RecipeViewCreateWithoutUserInput, {nullable:false})
    @Type(() => RecipeViewCreateWithoutUserInput)
    create!: RecipeViewCreateWithoutUserInput;
}
