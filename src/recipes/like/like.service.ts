import { Injectable } from '@nestjs/common'
import { CreateRecipeLikeInput } from 'src/recipes/like/inputs/create-recipe-like.input'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class LikeService {
	constructor(private readonly prisma: PrismaService) {}
	create(userId: string, data: CreateRecipeLikeInput) {
		return this.prisma.recipeLike.create({
			data: {
				userId: userId,
				recipeId: data.recipeId
			}
		})
	}

	findCount(data: CreateRecipeLikeInput) {
		return this.prisma.recipeLike.count({
			where: {
				recipeId: data.recipeId
			}
		})
	}

	remove(userId: string, data: CreateRecipeLikeInput) {
		return this.prisma.recipeLike.delete({
			where: {
				recipeId_userId: {
					recipeId: data.recipeId,
					userId: userId
				}
			}
		})
	}
}
