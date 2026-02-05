import { Module } from '@nestjs/common';
import { CommentsService } from './comments.service';
import { CommentsResolver } from './comments.resolver';
import { LikeModule } from './like/like.module';

@Module({
  providers: [CommentsResolver, CommentsService],
  imports: [LikeModule],
})
export class CommentsModule {}
