import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealsCreateManyRealtorInput } from './appeals-create-many-realtor.input';
import { Type } from 'class-transformer';

@InputType()
export class AppealsCreateManyRealtorInputEnvelope {

    @Field(() => [AppealsCreateManyRealtorInput], {nullable:false})
    @Type(() => AppealsCreateManyRealtorInput)
    data!: Array<AppealsCreateManyRealtorInput>;
}
