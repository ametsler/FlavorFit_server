import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentUpdateWithoutLikesInput } from './comment-update-without-likes.input';
import { Type } from 'class-transformer';
import { CommentCreateWithoutLikesInput } from './comment-create-without-likes.input';
import { CommentWhereInput } from './comment-where.input';

@InputType()
export class CommentUpsertWithoutLikesInput {

    @Field(() => CommentUpdateWithoutLikesInput, {nullable:false})
    @Type(() => CommentUpdateWithoutLikesInput)
    update!: CommentUpdateWithoutLikesInput;

    @Field(() => CommentCreateWithoutLikesInput, {nullable:false})
    @Type(() => CommentCreateWithoutLikesInput)
    create!: CommentCreateWithoutLikesInput;

    @Field(() => CommentWhereInput, {nullable:true})
    @Type(() => CommentWhereInput)
    where?: CommentWhereInput;
}
