import { Injectable } from '@nestjs/common'
import { CreateItemInput } from './inputs/create-item.input'

@Injectable()
export class ItemService {
	create(data: CreateItemInput) {
		return 'This action adds a new item'
	}

	findAll() {
		return `This action returns all item`
	}

	findOne(id: number) {
		return `This action returns a #${id} item`
	}

	update(id: string, data: CreateItemInput) {
		return `This action updates a #${id} item`
	}

	remove(id: number) {
		return `This action removes a #${id} item`
	}
}
