import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeViewCreateInput } from './recipe-view-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRecipeViewArgs {

    @Field(() => RecipeViewCreateInput, {nullable:false})
    @Type(() => RecipeViewCreateInput)
    data!: RecipeViewCreateInput;
}
