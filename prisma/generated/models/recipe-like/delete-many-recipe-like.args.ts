import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeLikeWhereInput } from './recipe-like-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyRecipeLikeArgs {

    @Field(() => RecipeLikeWhereInput, {nullable:true})
    @Type(() => RecipeLikeWhereInput)
    where?: RecipeLikeWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
