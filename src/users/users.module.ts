import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersResolver } from './users.resolver';
import { ScheduleModule } from './schedule/schedule.module';

@Module({
  providers: [UsersResolver, UsersService],
	exports: [UsersService],
	imports: [ScheduleModule]
})
export class UsersModule {}
