import { IsNotEmpty, IsNotEmptyObject, ValidateNested } from 'class-validator'
import { Field, InputType } from '@nestjs/graphql'

import { AddressCompany } from './address-company.input'
import { BylawsCompany } from './bylaws-company.input'

@InputType()
export class CreateCompany {
	@ValidateNested()
	@IsNotEmptyObject()
	@Field(() => AddressCompany)
	address: AddressCompany

	@ValidateNested()
	@IsNotEmptyObject()
	@Field(() => BylawsCompany)
	bylaws: BylawsCompany

	@Field()
	@IsNotEmpty()
	fiscalSituation: string

	@Field()
	@IsNotEmpty()
	name: string
}
