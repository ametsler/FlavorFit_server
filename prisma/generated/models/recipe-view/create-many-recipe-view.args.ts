import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeViewCreateManyInput } from './recipe-view-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRecipeViewArgs {

    @Field(() => [RecipeViewCreateManyInput], {nullable:false})
    @Type(() => RecipeViewCreateManyInput)
    data!: Array<RecipeViewCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
