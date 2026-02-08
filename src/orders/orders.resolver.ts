import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { OrdersService } from './orders.service';
import { OrderModel } from './models/order.model';
import { CreateOrderInput } from './inputs/create-order.input';
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/auth/decorators/current-user.decorator'

@Resolver(() => OrderModel)
export class OrdersResolver {
	constructor(private readonly ordersService: OrdersService) {}

	@Mutation(() => OrderModel)
	@Auth()
	createOrder(
		@CurrentUser('id') userId: string,
		@Args('input') input: CreateOrderInput
	) {
		return this.ordersService.create(userId, input)
	}

	@Query(() => [OrderModel], { name: 'orders' })
	@Auth()
	findAll(@CurrentUser('id') userId: string) {
		return this.ordersService.findAll(userId)
	}

	@Query(() => OrderModel, { name: 'order' })
	@Auth()
	findOne(@CurrentUser('id') userId: string, @Args('id') id: string) {
		return this.ordersService.findOne(userId, id)
	}

	@Mutation(() => OrderModel)
	@Auth()
	removeOrder(@CurrentUser('id') userId: string, @Args('id') id: string) {
		return this.ordersService.remove(userId, id)
	}
}
