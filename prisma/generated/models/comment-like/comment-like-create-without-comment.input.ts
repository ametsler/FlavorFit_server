import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutCommentLikeInput } from '../user/user-create-nested-one-without-comment-like.input';
import { Type } from 'class-transformer';

@InputType()
export class CommentLikeCreateWithoutCommentInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => UserCreateNestedOneWithoutCommentLikeInput, {nullable:false})
    @Type(() => UserCreateNestedOneWithoutCommentLikeInput)
    user!: UserCreateNestedOneWithoutCommentLikeInput;
}
