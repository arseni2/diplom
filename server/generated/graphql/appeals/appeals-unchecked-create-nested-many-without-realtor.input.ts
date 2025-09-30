import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealsCreateWithoutRealtorInput } from './appeals-create-without-realtor.input';
import { Type } from 'class-transformer';
import { AppealsCreateOrConnectWithoutRealtorInput } from './appeals-create-or-connect-without-realtor.input';
import { AppealsCreateManyRealtorInputEnvelope } from './appeals-create-many-realtor-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AppealsWhereUniqueInput } from './appeals-where-unique.input';

@InputType()
export class AppealsUncheckedCreateNestedManyWithoutRealtorInput {

    @Field(() => [AppealsCreateWithoutRealtorInput], {nullable:true})
    @Type(() => AppealsCreateWithoutRealtorInput)
    create?: Array<AppealsCreateWithoutRealtorInput>;

    @Field(() => [AppealsCreateOrConnectWithoutRealtorInput], {nullable:true})
    @Type(() => AppealsCreateOrConnectWithoutRealtorInput)
    connectOrCreate?: Array<AppealsCreateOrConnectWithoutRealtorInput>;

    @Field(() => AppealsCreateManyRealtorInputEnvelope, {nullable:true})
    @Type(() => AppealsCreateManyRealtorInputEnvelope)
    createMany?: AppealsCreateManyRealtorInputEnvelope;

    @Field(() => [AppealsWhereUniqueInput], {nullable:true})
    @Type(() => AppealsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AppealsWhereUniqueInput, 'id' | 'houseId' | 'clientId' | 'realtorId'>>;
}
