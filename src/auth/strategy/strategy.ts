import { Request } from 'express'
import { PassportStrategy } from '@nestjs/passport'
import { ExtractJwt, Strategy } from 'passport-jwt'
import { ConfigService } from '@nestjs/config'
import { PrismaService } from 'src/prisma/prisma.service'
import { User } from 'prisma/generated/prisma/client'
import { Injectable } from '@nestjs/common'

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
	constructor(
		private configService: ConfigService,
		private prisma: PrismaService
	) {
		super({
			jwtFromRequest: ExtractJwt.fromExtractors([
				(req: Request) => (req?.cookies?.accessToken as string | null) ?? null
			]),
			secretOrKey: configService.getOrThrow('JWT_SECRET')
		})
	}

	validate({ id }: { id: string }): Promise<User | null> {
		return this.prisma.user.findUnique({
			where: { id },
			include: { profile: true }
		})
	}
}
