import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeViewWhereInput } from './recipe-view-where.input';

@InputType()
export class RecipeViewListRelationFilter {

    @Field(() => RecipeViewWhereInput, {nullable:true})
    every?: RecipeViewWhereInput;

    @Field(() => RecipeViewWhereInput, {nullable:true})
    some?: RecipeViewWhereInput;

    @Field(() => RecipeViewWhereInput, {nullable:true})
    none?: RecipeViewWhereInput;
}
