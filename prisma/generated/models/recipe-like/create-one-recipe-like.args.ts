import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeLikeCreateInput } from './recipe-like-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneRecipeLikeArgs {

    @Field(() => RecipeLikeCreateInput, {nullable:false})
    @Type(() => RecipeLikeCreateInput)
    data!: RecipeLikeCreateInput;
}
