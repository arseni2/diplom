import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseCreateWithoutRealtorInput } from './house-create-without-realtor.input';
import { Type } from 'class-transformer';
import { HouseCreateOrConnectWithoutRealtorInput } from './house-create-or-connect-without-realtor.input';
import { HouseCreateManyRealtorInputEnvelope } from './house-create-many-realtor-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HouseWhereUniqueInput } from './house-where-unique.input';

@InputType()
export class HouseCreateNestedManyWithoutRealtorInput {

    @Field(() => [HouseCreateWithoutRealtorInput], {nullable:true})
    @Type(() => HouseCreateWithoutRealtorInput)
    create?: Array<HouseCreateWithoutRealtorInput>;

    @Field(() => [HouseCreateOrConnectWithoutRealtorInput], {nullable:true})
    @Type(() => HouseCreateOrConnectWithoutRealtorInput)
    connectOrCreate?: Array<HouseCreateOrConnectWithoutRealtorInput>;

    @Field(() => HouseCreateManyRealtorInputEnvelope, {nullable:true})
    @Type(() => HouseCreateManyRealtorInputEnvelope)
    createMany?: HouseCreateManyRealtorInputEnvelope;

    @Field(() => [HouseWhereUniqueInput], {nullable:true})
    @Type(() => HouseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HouseWhereUniqueInput, 'id'>>;
}
