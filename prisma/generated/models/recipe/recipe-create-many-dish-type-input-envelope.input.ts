import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeCreateManyDishTypeInput } from './recipe-create-many-dish-type.input';
import { Type } from 'class-transformer';

@InputType()
export class RecipeCreateManyDishTypeInputEnvelope {

    @Field(() => [RecipeCreateManyDishTypeInput], {nullable:false})
    @Type(() => RecipeCreateManyDishTypeInput)
    data!: Array<RecipeCreateManyDishTypeInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
