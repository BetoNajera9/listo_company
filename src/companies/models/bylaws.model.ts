import { Field, Int, ObjectType } from '@nestjs/graphql'
import { Bylaws as BylawsDB } from '@prisma/client'

@ObjectType()
export class Bylaws {
	@Field(() => String)
	typeOfPartnership: BylawsDB['typeOfPartnership']

	@Field(() => String)
	corporatePurpose: BylawsDB['corporatePurpose']

	@Field(() => Int)
	duration: BylawsDB['duration']

	@Field(() => String)
	administratorName: BylawsDB['administratorName']

	@Field(() => String)
	statutoryAuditors: BylawsDB['statutoryAuditors']
}
