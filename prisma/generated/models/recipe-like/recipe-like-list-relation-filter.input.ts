import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeLikeWhereInput } from './recipe-like-where.input';

@InputType()
export class RecipeLikeListRelationFilter {

    @Field(() => RecipeLikeWhereInput, {nullable:true})
    every?: RecipeLikeWhereInput;

    @Field(() => RecipeLikeWhereInput, {nullable:true})
    some?: RecipeLikeWhereInput;

    @Field(() => RecipeLikeWhereInput, {nullable:true})
    none?: RecipeLikeWhereInput;
}
