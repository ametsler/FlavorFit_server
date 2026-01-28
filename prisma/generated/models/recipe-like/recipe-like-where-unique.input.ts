import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeLikeRecipeIdUserIdCompoundUniqueInput } from './recipe-like-recipe-id-user-id-compound-unique.input';
import { RecipeLikeWhereInput } from './recipe-like-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { RecipeScalarRelationFilter } from '../recipe/recipe-scalar-relation-filter.input';
import { Type } from 'class-transformer';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';

@InputType()
export class RecipeLikeWhereUniqueInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => RecipeLikeRecipeIdUserIdCompoundUniqueInput, {nullable:true})
    recipeId_userId?: RecipeLikeRecipeIdUserIdCompoundUniqueInput;

    @Field(() => [RecipeLikeWhereInput], {nullable:true})
    AND?: Array<RecipeLikeWhereInput>;

    @Field(() => [RecipeLikeWhereInput], {nullable:true})
    OR?: Array<RecipeLikeWhereInput>;

    @Field(() => [RecipeLikeWhereInput], {nullable:true})
    NOT?: Array<RecipeLikeWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    recipeId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    userId?: StringFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    updatedAt?: DateTimeFilter;

    @Field(() => RecipeScalarRelationFilter, {nullable:true})
    @Type(() => RecipeScalarRelationFilter)
    recipe?: RecipeScalarRelationFilter;

    @Field(() => UserScalarRelationFilter, {nullable:true})
    @Type(() => UserScalarRelationFilter)
    user?: UserScalarRelationFilter;
}
