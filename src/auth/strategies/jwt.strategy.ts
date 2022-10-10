import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'
import { PassportStrategy } from '@nestjs/passport'
import { InjectRepository } from '@nestjs/typeorm'
import { UserEntity } from 'src/user/user.entity'
import { Repository } from 'typeorm'
import { Strategy, ExtractJwt } from 'passport-jwt'

@Injectable()
export class JwtStartegy extends PassportStrategy(Strategy) {
	constructor(
		private readonly configService: ConfigService,
		@InjectRepository(UserEntity)
		private readonly userRepository: Repository<UserEntity>
	) {
		super({
			jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
			ignoreExpiration: true,
			secretOrKey: configService.get('JWY_SECRET')
		})
	}
	async validate({ id }: Pick<UserEntity, 'id'>) {
		return this.userRepository.findBy({ id })
	}
}
