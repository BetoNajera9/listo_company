import { Company as CompanyDB } from '@prisma/client'
import { Field, ObjectType } from '@nestjs/graphql'

import { Address } from './address.model'
import { Bylaws } from './bylaws.model'

@ObjectType()
export class Company {
	@Field(() => String)
	id: CompanyDB['id']

	@Field(() => String)
	fiscalSituation: CompanyDB['fiscalSituation']

	@Field(() => Address)
	address: CompanyDB['address']

	@Field(() => String)
	name: CompanyDB['name']

	@Field(() => Bylaws)
	bylaws: CompanyDB['bylaws']
}
