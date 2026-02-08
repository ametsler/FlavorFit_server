import { Injectable } from '@nestjs/common'
import { CreateCommentInput } from './inputs/create-comment.input'
import { PrismaService } from 'src/prisma/prisma.service'

@Injectable()
export class CommentsService {
	constructor(private readonly prisma: PrismaService) {}
	create(authorId: string, data: CreateCommentInput) {
		return this.prisma.comment.create({
			data: {
				authorId,
				...data
			}
		})
	}

	findAll(recipeId: string) {
		return this.prisma.comment.findMany({
			where: {
				recipeId
			},
			orderBy: {
				createdAt: 'desc'
			}
		})
	}

	update(authorId: string, id: string, data: CreateCommentInput) {
		return this.prisma.comment.update({
			where: { id, authorId },
			data
		})
	}

	remove(id: string) {
		return this.prisma.comment.delete({
			where: { id }
		})
	}
}
