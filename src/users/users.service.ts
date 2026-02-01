import { Injectable, NotFoundException } from '@nestjs/common'
import { PrismaService } from 'src/prisma/prisma.service'
import type { UserUpdateInput } from 'prisma/generated/models/user'
import type { Prisma } from 'prisma/generated/prisma/client'
import { hash } from 'argon2'

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

	async updateProfile(id: string, input: UserUpdateInput) {
		const { profile, bodyMeasurement, password, ...data } = input
		// TODO: Check user exists
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
							create: profile as Prisma.ProfileCreateWithoutUserInput,
							update: profile as Prisma.ProfileUpdateWithoutUserInput
						}
					}
				}
			: {}

		// const updateBodyMeasurement: Prisma.XOR<
		// 	Prisma.UserUpdateInput,
		// 	Prisma.UserUncheckedUpdateInput
		// > = bodyMeasurement
		// 	? {
		// 			bodyMeasurement: {
		// 				upsert: {
		// 					create: bodyMeasurement,
		// 					update: bodyMeasurement
		// 				}
		// 			}
		// 		}
		// 	: {}

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
				// ...updateBodyMeasurement,
				email: data.email
			},
			include: {
				bodyMeasurement: true,
				profile: true
			}
		})
	}
}
