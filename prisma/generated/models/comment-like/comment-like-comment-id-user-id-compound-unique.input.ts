import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';

@InputType()
export class CommentLikeCommentIdUserIdCompoundUniqueInput {

    @Field(() => String, {nullable:false})
    commentId!: string;

    @Field(() => String, {nullable:false})
    userId!: string;
}
