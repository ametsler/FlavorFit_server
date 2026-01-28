import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentLikeCreateManyUserInput } from './comment-like-create-many-user.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentLikeCreateManyUserInputEnvelope {

    @Field(() => [CommentLikeCreateManyUserInput], {nullable:false})
    @Type(() => CommentLikeCreateManyUserInput)
    data!: Array<CommentLikeCreateManyUserInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
