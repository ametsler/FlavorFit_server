import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeViewScalarWhereInput } from './recipe-view-scalar-where.input';
import { Type } from 'class-transformer';
import { RecipeViewUpdateManyMutationInput } from './recipe-view-update-many-mutation.input';

@InputType()
export class RecipeViewUpdateManyWithWhereWithoutUserInput {

    @Field(() => RecipeViewScalarWhereInput, {nullable:false})
    @Type(() => RecipeViewScalarWhereInput)
    where!: RecipeViewScalarWhereInput;

    @Field(() => RecipeViewUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeViewUpdateManyMutationInput)
    data!: RecipeViewUpdateManyMutationInput;
}
