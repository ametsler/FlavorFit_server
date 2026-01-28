import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class UserCount {

    @Field(() => Int, {nullable:false})
    recipe?: number;

    @Field(() => Int, {nullable:false})
    recipeLike?: number;

    @Field(() => Int, {nullable:false})
    recipeView?: number;

    @Field(() => Int, {nullable:false})
    comment?: number;

    @Field(() => Int, {nullable:false})
    commentLike?: number;

    @Field(() => Int, {nullable:false})
    order?: number;
}
