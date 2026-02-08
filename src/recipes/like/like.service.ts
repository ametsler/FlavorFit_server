import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class LikeService {
	constructor(private readonly prisma: PrismaService) {}
	async toggle(userId: string, recipeId: string) {
		const data = {
			recipeId,
			userId
		}

		const like = await this.prisma.recipeLike.findUnique({
			where: {
				recipeId_userId: data
			}
		})

		if (like) {
			return this.prisma.recipeLike.delete({
				where: {
					recipeId_userId: data
				}
			})
		} else {
			return this.prisma.recipeLike.create({
				data
			})
		}
	}

	findCount(recipeId: string) {
		return this.prisma.recipeLike.count({
			where: {
				recipeId
			}
		})
	}
}
