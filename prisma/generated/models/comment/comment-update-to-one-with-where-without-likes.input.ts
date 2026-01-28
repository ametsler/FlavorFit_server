import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentWhereInput } from './comment-where.input';
import { Type } from 'class-transformer';
import { CommentUpdateWithoutLikesInput } from './comment-update-without-likes.input';

@InputType()
export class CommentUpdateToOneWithWhereWithoutLikesInput {

    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: CommentWhereInput;

    @Field(() => CommentUpdateWithoutLikesInput, {nullable:false})
    @Type(() => CommentUpdateWithoutLikesInput)
    data!: CommentUpdateWithoutLikesInput;
}
