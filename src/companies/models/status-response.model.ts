import { Field, ObjectType } from '@nestjs/graphql'

import { Company } from './company.model'

@ObjectType()
export class StatusResponse {
	@Field(() => Boolean)
	success: boolean

	@Field(() => String)
	code: string

	@Field(() => String)
	message: string

	@Field(() => [Company], { nullable: true })
	data?: Company[]
}
