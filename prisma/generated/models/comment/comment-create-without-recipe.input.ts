import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentLikeCreateNestedManyWithoutCommentInput } from '../comment-like/comment-like-create-nested-many-without-comment.input';
import { UserCreateNestedOneWithoutCommentInput } from '../user/user-create-nested-one-without-comment.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentCreateWithoutRecipeInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CommentLikeCreateNestedManyWithoutCommentInput, {nullable:true})
    likes?: CommentLikeCreateNestedManyWithoutCommentInput;

    @Field(() => UserCreateNestedOneWithoutCommentInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutCommentInput)
    author!: UserCreateNestedOneWithoutCommentInput;
}
