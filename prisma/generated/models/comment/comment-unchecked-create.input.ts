import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { CommentLikeUncheckedCreateNestedManyWithoutCommentInput } from '../comment-like/comment-like-unchecked-create-nested-many-without-comment.input';

@InputType()
export class CommentUncheckedCreateInput {

    @Field(() => String, {nullable:true})
    id?: string;

    @Field(() => String, {nullable:false})
    content!: string;

    @Field(() => String, {nullable:false})
    recipeId!: string;

    @Field(() => String, {nullable:false})
    authorId!: string;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => Date, {nullable:true})
    updatedAt?: Date | string;

    @Field(() => CommentLikeUncheckedCreateNestedManyWithoutCommentInput, {nullable:true})
    likes?: CommentLikeUncheckedCreateNestedManyWithoutCommentInput;
}
