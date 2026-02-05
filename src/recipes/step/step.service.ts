import { Injectable } from '@nestjs/common'
import { CreateStepInput } from './inputs/create-step.input'

@Injectable()
export class StepService {
	create(data: CreateStepInput) {
		return 'This action adds a new step'
	}

	findAll() {
		return `This action returns all step`
	}

	findOne(id: number) {
		return `This action returns a #${id} step`
	}

	update(id: string, data: CreateStepInput) {
		return `This action updates a #${id} step`
	}

	remove(id: number) {
		return `This action removes a #${id} step`
	}
}
