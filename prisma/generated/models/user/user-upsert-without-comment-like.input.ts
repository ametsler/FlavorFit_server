import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutCommentLikeInput } from './user-update-without-comment-like.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutCommentLikeInput } from './user-create-without-comment-like.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutCommentLikeInput {

    @Field(() => UserUpdateWithoutCommentLikeInput, {nullable:false})
    @Type(() => UserUpdateWithoutCommentLikeInput)
    update!: UserUpdateWithoutCommentLikeInput;

    @Field(() => UserCreateWithoutCommentLikeInput, {nullable:false})
    @Type(() => UserCreateWithoutCommentLikeInput)
    create!: UserCreateWithoutCommentLikeInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
