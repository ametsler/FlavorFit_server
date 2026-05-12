import { Module } from '@nestjs/common'
import { ServeStaticModule } from '@nestjs/serve-static'
import { path } from 'app-root-path'
import { MediaUploadController } from './media-upload.controller'
import { MediaUploadService } from './media-upload.service'

@Module({
	imports: [
		// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access
		ServeStaticModule.forRoot({
			rootPath: `${path}/uploads`,
			serveRoot: '/uploads'
		})
	],
	providers: [MediaUploadService],
	controllers: [MediaUploadController]
})
export class MediaUploadModule {}
