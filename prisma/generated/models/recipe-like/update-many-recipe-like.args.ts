import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeLikeUpdateManyMutationInput } from './recipe-like-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RecipeLikeWhereInput } from './recipe-like-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyRecipeLikeArgs {

    @Field(() => RecipeLikeUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeLikeUpdateManyMutationInput)
    data!: RecipeLikeUpdateManyMutationInput;

    @Field(() => RecipeLikeWhereInput, {nullable:true})
    @Type(() => RecipeLikeWhereInput)
    where?: RecipeLikeWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
