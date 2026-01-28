import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeViewWhereInput } from './recipe-view-where.input';
import { Type } from 'class-transformer';
import { RecipeViewOrderByWithRelationInput } from './recipe-view-order-by-with-relation.input';
import { Prisma } from 'prisma/generated/prisma/client';
import { RecipeViewWhereUniqueInput } from './recipe-view-where-unique.input';
import { Int } from '@nestjs/graphql';
import { RecipeViewScalarFieldEnum } from './recipe-view-scalar-field.enum';

@ArgsType()
export class FindFirstRecipeViewArgs {

    @Field(() => RecipeViewWhereInput, {nullable:true})
    @Type(() => RecipeViewWhereInput)
    where?: RecipeViewWhereInput;

    @Field(() => [RecipeViewOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<RecipeViewOrderByWithRelationInput>;

    @Field(() => RecipeViewWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<RecipeViewWhereUniqueInput, 'id' | 'recipeId_userId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [RecipeViewScalarFieldEnum], {nullable:true})
    distinct?: Array<`${RecipeViewScalarFieldEnum}`>;
}
