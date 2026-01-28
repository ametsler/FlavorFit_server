import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeViewCreateManyRecipeInput } from './recipe-view-create-many-recipe.input';
import { Type } from 'class-transformer';

@InputType()
export class RecipeViewCreateManyRecipeInputEnvelope {

    @Field(() => [RecipeViewCreateManyRecipeInput], {nullable:false})
    @Type(() => RecipeViewCreateManyRecipeInput)
    data!: Array<RecipeViewCreateManyRecipeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
