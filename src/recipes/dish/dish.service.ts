import { Injectable } from '@nestjs/common';
import { CreateDishInput } from './inputs/create-dish.input';

@Injectable()
export class DishService {
	create(createDishInput: CreateDishInput) {
		return 'This action adds a new dish'
	}

	findAll() {
		return `This action returns all dish`
	}

	findOne(id: number) {
		return `This action returns a #${id} dish`
	}

	update(id: string, updateDishInput: CreateDishInput) {
		return `This action updates a #${id} dish`
	}

	remove(id: number) {
		return `This action removes a #${id} dish`
	}
}
