import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutCommentLikeInput } from './user-update-without-comment-like.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutCommentLikeInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutCommentLikeInput, {nullable:false})
    @Type(() => UserUpdateWithoutCommentLikeInput)
    data!: UserUpdateWithoutCommentLikeInput;
}
