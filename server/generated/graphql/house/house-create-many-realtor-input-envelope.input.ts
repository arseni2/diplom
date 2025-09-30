import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseCreateManyRealtorInput } from './house-create-many-realtor.input';
import { Type } from 'class-transformer';

@InputType()
export class HouseCreateManyRealtorInputEnvelope {

    @Field(() => [HouseCreateManyRealtorInput], {nullable:false})
    @Type(() => HouseCreateManyRealtorInput)
    data!: Array<HouseCreateManyRealtorInput>;
}
