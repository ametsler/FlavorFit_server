import { Injectable } from '@nestjs/common'
import { CreateDeliveryInput } from './inputs/create-delivery.input'
import { PrismaService } from 'src/prisma/prisma.service'
import { DeliveryStatus } from 'prisma/generated/prisma/enums'

@Injectable()
export class DeliveriesService {
	constructor(private readonly prisma: PrismaService) {}
	create(data: CreateDeliveryInput) {
		return this.prisma.delivery.create({
			data
		})
	}

	updateStatus(id: string, status: DeliveryStatus) {
		return this.prisma.delivery.update({
			where: { id },
			data: {
				status
			}
		})
	}
}
