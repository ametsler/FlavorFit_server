import { Injectable } from '@nestjs/common'
import { CreateDeliveryInput } from './inputs/create-delivery.input'

@Injectable()
export class DeliveriesService {
	create(date: CreateDeliveryInput) {
		return 'This action adds a new delivery'
	}

	findAll() {
		return `This action returns all deliveries`
	}

	findOne(id: number) {
		return `This action returns a #${id} delivery`
	}

	update(id: string, date: CreateDeliveryInput) {
		return `This action updates a #${id} delivery`
	}

	remove(id: number) {
		return `This action removes a #${id} delivery`
	}
}
