import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { DeliveriesService } from './deliveries.service';
import { DeliveryModel } from './models/delivery.model';
import { CreateDeliveryInput } from './inputs/create-delivery.input';

@Resolver(() => DeliveryModel)
export class DeliveriesResolver {
	constructor(private readonly deliveriesService: DeliveriesService) {}

	@Mutation(() => DeliveryModel)
	createDelivery(
		@Args('createDeliveryInput') createDeliveryInput: CreateDeliveryInput
	) {
		return this.deliveriesService.create(createDeliveryInput)
	}

	@Query(() => [DeliveryModel], { name: 'deliveries' })
	findAll() {
		return this.deliveriesService.findAll()
	}

	@Query(() => DeliveryModel, { name: 'delivery' })
	findOne(@Args('id', { type: () => Int }) id: number) {
		return this.deliveriesService.findOne(id)
	}

	@Mutation(() => DeliveryModel)
	updateDelivery(
		@Args('id') id: string,
		@Args('updateDeliveryInput') updateDeliveryInput: CreateDeliveryInput
	) {
		return this.deliveriesService.update(
			id,
			updateDeliveryInput
		)
	}

	@Mutation(() => DeliveryModel)
	removeDelivery(@Args('id', { type: () => Int }) id: number) {
		return this.deliveriesService.remove(id)
	}
}
