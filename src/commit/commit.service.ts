import { Injectable } from '@nestjs/common'
import { InjectRepository } from '@nestjs/typeorm'
import { Repository } from 'typeorm'
import { CommentDto } from './commit.dto'
import { CommitEntity } from './commit.entity'

@Injectable()
export class CommitService {
	constructor(
		@InjectRepository(CommitEntity)
		private readonly commitRepository: Repository<CommitEntity>
	) {}

	async create(userId: number, dto: CommentDto) {
		const newComment = this.commitRepository.create({
			message: dto.message,
			video: { id: dto.videoId },
			user: { id: userId }
		})

		return this.commitRepository.save(newComment)
	}
}
