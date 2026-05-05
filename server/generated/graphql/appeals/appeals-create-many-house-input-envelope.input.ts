import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealsCreateManyHouseInput } from './appeals-create-many-house.input';
import { Type } from 'class-transformer';

@InputType()
export class AppealsCreateManyHouseInputEnvelope {

    @Field(() => [AppealsCreateManyHouseInput], {nullable:false})
    @Type(() => AppealsCreateManyHouseInput)
    data!: Array<AppealsCreateManyHouseInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
