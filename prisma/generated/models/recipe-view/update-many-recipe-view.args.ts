import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeViewUpdateManyMutationInput } from './recipe-view-update-many-mutation.input';
import { Type } from 'class-transformer';
import { RecipeViewWhereInput } from './recipe-view-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyRecipeViewArgs {

    @Field(() => RecipeViewUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeViewUpdateManyMutationInput)
    data!: RecipeViewUpdateManyMutationInput;

    @Field(() => RecipeViewWhereInput, {nullable:true})
    @Type(() => RecipeViewWhereInput)
    where?: RecipeViewWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
