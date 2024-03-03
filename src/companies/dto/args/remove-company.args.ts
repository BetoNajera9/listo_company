import { ArgsType } from '@nestjs/graphql'

import { GetCompany } from './get-company.args'

@ArgsType()
export class RemoveCompany extends GetCompany {}
