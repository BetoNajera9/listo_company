import { ArgsType, Field } from '@nestjs/graphql'
import { IsNotEmpty } from 'class-validator'

@ArgsType()
export class GetCompany {
	@Field()
	@IsNotEmpty()
	id: string
}
