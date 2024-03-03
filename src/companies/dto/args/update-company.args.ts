import { ArgsType, Field } from '@nestjs/graphql'
import { IsNotEmpty } from 'class-validator'

import { UpdateCompany as UpdateCompanyInput } from '../input'

@ArgsType()
export class UpdateCompany {
	@Field()
	@IsNotEmpty()
	id: string

	@Field(() => UpdateCompanyInput)
	@IsNotEmpty()
	company: UpdateCompanyInput
}
