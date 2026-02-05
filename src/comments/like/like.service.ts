import { Injectable } from '@nestjs/common'
import { CreateLikeInput } from './inputs/create-like.input'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class LikeService {
	constructor(private readonly prisma: PrismaService) {}
	create(userId: string, data: CreateLikeInput) {
		return this.prisma.commentLike.create({
			data: {
				userId: userId,
				commentId: data.commentId
			}
		})
	}

	findCount(data: CreateLikeInput) {
		return this.prisma.commentLike.count({
			where: {
				commentId: data.commentId
			}
		})
	}

	remove(userId: string, data: CreateLikeInput) {
		return this.prisma.commentLike.delete({
			where: {
				commentId_userId: {
					commentId: data.commentId,
					userId: userId
				}
			}
		})
	}
}
