import { IsPostalCode, IsNotEmpty, IsString } from 'class-validator'
import { Field, InputType } from '@nestjs/graphql'

@InputType()
export class AddressCompany {
	@Field()
	@IsString()
	@IsNotEmpty()
	street: string

	@Field()
	@IsString()
	@IsNotEmpty()
	city: string

	@Field()
	@IsString()
	@IsNotEmpty()
	state: string

	@Field()
	@IsString()
	@IsPostalCode()
	zip: string
}
