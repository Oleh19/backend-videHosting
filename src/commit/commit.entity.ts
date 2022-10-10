import { UserEntity } from 'src/user/user.entity'
import { Base } from 'src/utils/base'
import { VideoEntity } from 'src/video/video.entity'
import { Entity, ManyToOne, JoinColumn, Column } from 'typeorm'

@Entity('Commit')
export class CommitEntity extends Base {
	@Column({ default: '', type: 'text' })
	message: string

	@ManyToOne(() => UserEntity)
	@JoinColumn({ name: 'user_id' })
	user: UserEntity

	@ManyToOne(() => VideoEntity, video => video.comments)
	@JoinColumn({ name: 'video_id' })
	video: VideoEntity
}
