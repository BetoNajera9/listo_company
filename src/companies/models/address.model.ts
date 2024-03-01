import { Address as AddressDB } from '@prisma/client'
import { Field, ObjectType } from '@nestjs/graphql'

@ObjectType()
export class Address {
	@Field(() => String)
	street: AddressDB['street']

	@Field(() => String)
	city: AddressDB['city']

	@Field(() => String)
	state: AddressDB['state']

	@Field(() => String)
	zip: AddressDB['zip']
}
