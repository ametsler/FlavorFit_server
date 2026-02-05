import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { OrderModel } from './models/order.model';
import { CreateOrderInput } from './inputs/create-order.input';

@Resolver(() => OrderModel)
export class OrdersResolver {
	constructor(private readonly ordersService: OrdersService) {}

	@Mutation(() => OrderModel)
	createOrder(@Args('input') input: CreateOrderInput) {
		return this.ordersService.create(input)
	}

	@Query(() => [OrderModel], { name: 'orders' })
	findAll() {
		return this.ordersService.findAll()
	}

	@Query(() => OrderModel, { name: 'order' })
	findOne(@Args('id', { type: () => Int }) id: number) {
		return this.ordersService.findOne(id)
	}

	@Mutation(() => OrderModel)
	updateOrder(
		@Args('id') id: string,
		@Args('input') input: CreateOrderInput
	) {
		return this.ordersService.update(id, input)
	}

	@Mutation(() => OrderModel)
	removeOrder(@Args('id', { type: () => Int }) id: number) {
		return this.ordersService.remove(id)
	}
}
