import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeLikeScalarWhereInput } from './recipe-like-scalar-where.input';
import { Type } from 'class-transformer';
import { RecipeLikeUpdateManyMutationInput } from './recipe-like-update-many-mutation.input';

@InputType()
export class RecipeLikeUpdateManyWithWhereWithoutRecipeInput {

    @Field(() => RecipeLikeScalarWhereInput, {nullable:false})
    @Type(() => RecipeLikeScalarWhereInput)
    where!: RecipeLikeScalarWhereInput;

    @Field(() => RecipeLikeUpdateManyMutationInput, {nullable:false})
    @Type(() => RecipeLikeUpdateManyMutationInput)
    data!: RecipeLikeUpdateManyMutationInput;
}
