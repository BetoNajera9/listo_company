import { IsInt, IsNotEmpty, IsPostalCode, IsString } from 'class-validator'
import { Field, InputType, Int } from '@nestjs/graphql'

@InputType()
export class BylawsCompany {
	@Field()
	@IsString()
	@IsNotEmpty()
	typeOfPartnership: string

	@Field()
	@IsString()
	@IsNotEmpty()
	corporatePurpose: string

	@Field(() => Int)
	@IsInt()
	@IsNotEmpty()
	duration: number

	@Field()
	@IsString()
	@IsPostalCode()
	administratorName: string

	@Field()
	@IsString()
	@IsPostalCode()
	statutoryAuditors: string
}
