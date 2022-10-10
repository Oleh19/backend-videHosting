import { IsEmail, IsString, MinLength } from 'class-validator'

export class AuthDto {
	@IsEmail()
	email: string

	@MinLength(7, {
		message: 'Minimum 7 characters!'
	})
	@IsString()
	password: string
}
