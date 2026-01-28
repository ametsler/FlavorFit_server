import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeViewCreateManyUserInput } from './recipe-view-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class RecipeViewCreateManyUserInputEnvelope {

    @Field(() => [RecipeViewCreateManyUserInput], {nullable:false})
    @Type(() => RecipeViewCreateManyUserInput)
    data!: Array<RecipeViewCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
