import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import type { Prisma } from 'prisma/generated/prisma/client'
import { hash } from 'argon2'
import { UpdateUserInput } from 'src/users/inputs/update-user.input'

@Injectable()
export class UsersService {
	constructor(private readonly prisma: PrismaService) {}

	async findAll() {
		return this.prisma.user.findMany()
	}

	async findById(id: string) {
		return this.prisma.user.findUnique({
			where: {
				id
			},
			include: {
				bodyMeasurement: true,
				profile: true
			}
		})
	}

	async findByEmail(email: string) {
		return this.prisma.user.findFirst({
			where: {
				email: {
					equals: email,
					mode: 'insensitive'
				}
			}
		})
	}

	async updateProfile(id: string, input: UpdateUserInput) {
		const { profile, bodyMeasurement, password, email, role } = input

		const user = await this.findById(id)

		if (!user) {
			throw new NotFoundException('User not found')
		}

		const updateProfile: Prisma.XOR<
			Prisma.UserUpdateInput,
			Prisma.UserUncheckedUpdateInput
		> = profile
			? {
					profile: {
						upsert: {
							create: profile,
							update: profile
						}
					}
				}
			: {}

		const updateBodyMeasurement: Prisma.XOR<
			Prisma.UserUpdateInput,
			Prisma.UserUncheckedUpdateInput
		> = bodyMeasurement
			? {
					bodyMeasurement: {
						upsert: {
							create: bodyMeasurement,
							update: bodyMeasurement
						}
					}
				}
			: {}

		const hashedPassword = password
			? {
					password: await hash(password)
				}
			: {}

		return this.prisma.user.update({
			where: { id },
			data: {
				...hashedPassword,
				...updateProfile,
				...updateBodyMeasurement,
				email,
				role
			},
			include: {
				bodyMeasurement: true,
				profile: true
			}
		})
	}
}
