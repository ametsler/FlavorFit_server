import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { RecipeLikeCreateManyInput } from './recipe-like-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyRecipeLikeArgs {

    @Field(() => [RecipeLikeCreateManyInput], {nullable:false})
    @Type(() => RecipeLikeCreateManyInput)
    data!: Array<RecipeLikeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
