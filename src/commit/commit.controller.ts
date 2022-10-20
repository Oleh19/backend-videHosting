import {
	Body,
	Controller,
	HttpCode,
	Post,
	UsePipes,
	ValidationPipe
} from '@nestjs/common'
import { Auth } from 'src/auth/decorators/auth.decorator'
import { CurrentUser } from 'src/user/user.decorator'
import { CommentDto } from './commit.dto'
import { CommitService } from './commit.service'

@Controller('commit')
export class CommitController {
	constructor(private readonly commitService: CommitService) {}

	@UsePipes(new ValidationPipe())
	@HttpCode(200)
	@Post()
	@Auth()
	async createComment(@CurrentUser('id') id: string, @Body() dto: CommentDto) {
		return this.commitService.create(Number(id), dto)
	}
}
