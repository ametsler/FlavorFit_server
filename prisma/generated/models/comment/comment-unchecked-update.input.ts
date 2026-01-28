import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentLikeUncheckedUpdateManyWithoutCommentNestedInput } from '../comment-like/comment-like-unchecked-update-many-without-comment-nested.input';

@InputType()
export class CommentUncheckedUpdateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:true})
    content?: string;

    @Field(() => String, {nullable:true})
    recipeId?: string;

    @Field(() => String, {nullable:true})
    authorId?: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CommentLikeUncheckedUpdateManyWithoutCommentNestedInput, {nullable:true})
    likes?: CommentLikeUncheckedUpdateManyWithoutCommentNestedInput;
}
