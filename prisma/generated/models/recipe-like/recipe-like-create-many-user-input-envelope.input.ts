import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RecipeLikeCreateManyUserInput } from './recipe-like-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class RecipeLikeCreateManyUserInputEnvelope {

    @Field(() => [RecipeLikeCreateManyUserInput], {nullable:false})
    @Type(() => RecipeLikeCreateManyUserInput)
    data!: Array<RecipeLikeCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
