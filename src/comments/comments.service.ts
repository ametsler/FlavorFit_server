import { Injectable } from '@nestjs/common'
import { CreateCommentInput } from './inputs/create-comment.input'

@Injectable()
export class CommentsService {
	create(data: CreateCommentInput) {
		return 'This action adds a new comment'
	}

	findAll() {
		return `This action returns all comments`
	}

	findOne(id: number) {
		return `This action returns a #${id} comment`
	}

	update(id: string, data: CreateCommentInput) {
		return `This action updates a #${id} comment`
	}

	remove(id: number) {
		return `This action removes a #${id} comment`
	}
}
