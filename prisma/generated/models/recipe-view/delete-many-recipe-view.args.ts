import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeViewWhereInput } from './recipe-view-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyRecipeViewArgs {

    @Field(() => RecipeViewWhereInput, {nullable:true})
    @Type(() => RecipeViewWhereInput)
    where?: RecipeViewWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
