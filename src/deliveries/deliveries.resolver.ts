import { Args, Mutation, Resolver } from '@nestjs/graphql'
import { DeliveriesService } from './deliveries.service'
import { DeliveryModel } from './models/delivery.model'
import { CreateDeliveryInput } from './inputs/create-delivery.input'
import { DeliveryStatus } from 'prisma/generated/prisma/enums'

@Resolver(() => DeliveryModel)
export class DeliveriesResolver {
	constructor(private readonly deliveriesService: DeliveriesService) {}

	@Mutation(() => DeliveryModel)
	createDelivery(
		@Args('createDeliveryInput') createDeliveryInput: CreateDeliveryInput
	) {
		return this.deliveriesService.create(createDeliveryInput)
	}

	@Mutation(() => DeliveryModel)
	updateDelivery(
		@Args('id') id: string,
		@Args('status') status: DeliveryStatus
	) {
		return this.deliveriesService.updateStatus(id, status)
	}
}
