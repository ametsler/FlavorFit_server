import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { CommentLikeCreateManyInput } from './comment-like-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyCommentLikeArgs {

    @Field(() => [CommentLikeCreateManyInput], {nullable:false})
    @Type(() => CommentLikeCreateManyInput)
    data!: Array<CommentLikeCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
