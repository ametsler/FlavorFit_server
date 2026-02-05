import { Injectable } from '@nestjs/common';
import { CreateTagInput } from './inputs/create-tag.input';

@Injectable()
export class TagService {
	create(createTagInput: CreateTagInput) {
		return 'This action adds a new tag'
	}

	findAll() {
		return `This action returns all tag`
	}

	findOne(id: number) {
		return `This action returns a #${id} tag`
	}

	update(id: string, updateTagInput: CreateTagInput) {
		return `This action updates a #${id} tag`
	}

	remove(id: number) {
		return `This action removes a #${id} tag`
	}
}
