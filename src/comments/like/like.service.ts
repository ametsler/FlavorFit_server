import { Injectable } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class LikeService {
	constructor(private readonly prisma: PrismaService) {}
	async toggle(userId: string, commentId: string) {
		const data = {
			commentId,
			userId
		}

		const like = await this.prisma.commentLike.findUnique({
			where: {
				commentId_userId: data
			}
		})

		if (like) {
			return this.prisma.commentLike.delete({
				where: {
					commentId_userId: data
				}
			})
		} else {
			return this.prisma.commentLike.create({
				data
			})
		}
	}

	findCount(commentId: string) {
		return this.prisma.commentLike.count({
			where: {
				commentId
			}
		})
	}
}
