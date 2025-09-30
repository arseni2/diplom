import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppealsCreateInput } from './appeals-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneAppealsArgs {

    @Field(() => AppealsCreateInput, {nullable:false})
    @Type(() => AppealsCreateInput)
    data!: AppealsCreateInput;
}
