import { Module } from '@nestjs/common';
import { DishService } from './dish.service';
import { DishResolver } from './dish.resolver';

@Module({
  providers: [DishResolver, DishService],
})
export class DishModule {}
