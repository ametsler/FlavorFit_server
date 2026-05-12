import { Controller, HttpCode, Post, UploadedFile, UseInterceptors } from '@nestjs/common'
import { FileInterceptor } from '@nestjs/platform-express'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { MediaUploadService } from './media-upload.service'

@Controller('api/upload')
export class MediaUploadController {
	constructor(private readonly mediaUploadService: MediaUploadService) {}

	@HttpCode(200)
	@Post('avatar')
	@Auth()
	@UseInterceptors(
		FileInterceptor('file', {
			limits: { fileSize: 5 * 1024 * 1024 } // 5MB
		})
	)
	async uploadAvatar(@UploadedFile() file: Express.Multer.File) {
		return await this.mediaUploadService.saveAvatar(file)
	}
}
