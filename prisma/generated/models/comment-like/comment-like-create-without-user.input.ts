import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentCreateNestedOneWithoutLikesInput } from '../comment/comment-create-nested-one-without-likes.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentLikeCreateWithoutUserInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CommentCreateNestedOneWithoutLikesInput, {nullable:false})
    @Type(() => CommentCreateNestedOneWithoutLikesInput)
    comment!: CommentCreateNestedOneWithoutLikesInput;
}
