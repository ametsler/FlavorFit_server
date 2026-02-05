import { Injectable } from '@nestjs/common'
import { CreateOrderInput } from './inputs/create-order.input'

@Injectable()
export class OrdersService {
	create(data: CreateOrderInput) {
		return 'This action adds a new order'
	}

	findAll() {
		return `This action returns all orders`
	}

	findOne(id: number) {
		return `This action returns a #${id} order`
	}

	update(id: string, data: CreateOrderInput) {
		return `This action updates a #${id} order`
	}

	remove(id: number) {
		return `This action removes a #${id} order`
	}
}
