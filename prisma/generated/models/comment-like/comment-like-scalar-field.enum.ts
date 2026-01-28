import { registerEnumType } from '@nestjs/graphql';

export enum CommentLikeScalarFieldEnum {
    id = "id",
    commentId = "commentId",
    userId = "userId",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(CommentLikeScalarFieldEnum, { name: 'CommentLikeScalarFieldEnum', description: undefined })
