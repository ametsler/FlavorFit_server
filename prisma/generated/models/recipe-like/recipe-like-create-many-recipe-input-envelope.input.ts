import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeLikeCreateManyRecipeInput } from './recipe-like-create-many-recipe.input';
import { Type } from 'class-transformer';

@InputType()
export class RecipeLikeCreateManyRecipeInputEnvelope {

    @Field(() => [RecipeLikeCreateManyRecipeInput], {nullable:false})
    @Type(() => RecipeLikeCreateManyRecipeInput)
    data!: Array<RecipeLikeCreateManyRecipeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
