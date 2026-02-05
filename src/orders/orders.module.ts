import { Module } from '@nestjs/common';
import { OrdersService } from './orders.service';
import { OrdersResolver } from './orders.resolver';
import { ItemModule } from './item/item.module';

@Module({
  providers: [OrdersResolver, OrdersService],
  imports: [ItemModule],
})
export class OrdersModule {}
