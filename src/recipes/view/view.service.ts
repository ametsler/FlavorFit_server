import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import { CreateViewInput } from './inputs/create-view.input'

@Injectable()
export class ViewService {
	constructor(private readonly prisma: PrismaService) {}
	create(userId: string, data: CreateViewInput) {
		return this.prisma.recipeView.create({
			data: {
				userId: userId,
				recipeId: data.recipeId
			}
		})
	}

	findCount(data: CreateViewInput) {
		return this.prisma.recipeView.count({
			where: {
				recipeId: data.recipeId
			}
		})
	}

	remove(userId: string, data: CreateViewInput) {
		return this.prisma.recipeView.delete({
			where: {
				recipeId_userId: {
					recipeId: data.recipeId,
					userId: userId
				}
			}
		})
	}
}
