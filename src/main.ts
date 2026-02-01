import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ValidationPipe } from '@nestjs/common'
import cookieParser from 'cookie-parser'
import { NestExpressApplication } from '@nestjs/platform-express'

async function bootstrap() {
	const app = await NestFactory.create<NestExpressApplication>(AppModule)
	app.useGlobalPipes(
		new ValidationPipe({
			whitelist: true
		})
	)
	app.use(cookieParser())

	app.disable('x-powered-by')

	app.enableCors({
		origin: [process.env.HOST || 'http://localhost:4200'],
		credentials: true,
		allowedHeaders: ['Content-Type', 'Authorization']
	})

	await app.listen(process.env.PORT ?? 4200)
}

bootstrap()
