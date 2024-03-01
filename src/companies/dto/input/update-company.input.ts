import { IsOptional, ValidateNested } from 'class-validator'
import { Field, InputType } from '@nestjs/graphql'

import { AddressCompany } from './address-company.input'
import { BylawsCompany } from './bylaws-company.input'

@InputType()
export class UpdateCompany {
	@IsOptional()
	@ValidateNested()
	@Field(() => AddressCompany, { nullable: true })
	address?: AddressCompany

	@IsOptional()
	@ValidateNested()
	@Field(() => BylawsCompany, { nullable: true })
	bylaws?: BylawsCompany

	@IsOptional()
	@Field({ nullable: true })
	fiscalSituation?: string

	@IsOptional()
	@Field({ nullable: true })
	name?: string
}
