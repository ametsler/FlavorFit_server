import { Injectable } from '@nestjs/common';
import { CreateDishInput } from './inputs/create-dish.input';
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class DishService {
	constructor(private readonly prisma: PrismaService) {}
	create(data: CreateDishInput) {
		return this.prisma.dishType.create({
			data
		})
	}

	findAll() {
		return this.prisma.dishType.findMany()
	}

	update(id: string, data: CreateDishInput) {
		return this.prisma.dishType.update({
			where: { id },
			data
		})
	}

	remove(id: string) {
		return this.prisma.dishType.delete({
			where: { id }
		})
	}
}
