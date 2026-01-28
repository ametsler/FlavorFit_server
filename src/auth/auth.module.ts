import { Module } from '@nestjs/common'
import { AuthService } from './auth.service'
import { AuthResolver } from './auth.resolver'
import { JwtModule } from '@nestjs/jwt'
import { ConfigModule, ConfigService } from '@nestjs/config'
import { getJwtConfig } from 'src/config/jwt.config'
import { UsersService } from 'src/users/users.service'
import { UsersModule } from 'src/users/users.module'
import { JwtStrategy } from 'src/auth/strategy/strategy'
import { PassportModule } from '@nestjs/passport'

@Module({
	imports: [
		PassportModule.register({ defaultStrategy: 'jwt' }),
		JwtModule.registerAsync({
			imports: [ConfigModule],
			inject: [ConfigService],
			useFactory: getJwtConfig
		}),
		UsersModule
	],
	providers: [JwtStrategy, AuthService, AuthResolver, UsersService]
})
export class AuthModule {}
