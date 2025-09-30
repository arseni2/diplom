import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealsCreateWithoutRealtorInput } from './appeals-create-without-realtor.input';
import { Type } from 'class-transformer';
import { AppealsCreateOrConnectWithoutRealtorInput } from './appeals-create-or-connect-without-realtor.input';
import { AppealsUpsertWithWhereUniqueWithoutRealtorInput } from './appeals-upsert-with-where-unique-without-realtor.input';
import { AppealsCreateManyRealtorInputEnvelope } from './appeals-create-many-realtor-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AppealsWhereUniqueInput } from './appeals-where-unique.input';
import { AppealsUpdateWithWhereUniqueWithoutRealtorInput } from './appeals-update-with-where-unique-without-realtor.input';
import { AppealsUpdateManyWithWhereWithoutRealtorInput } from './appeals-update-many-with-where-without-realtor.input';
import { AppealsScalarWhereInput } from './appeals-scalar-where.input';

@InputType()
export class AppealsUpdateManyWithoutRealtorNestedInput {

    @Field(() => [AppealsCreateWithoutRealtorInput], {nullable:true})
    @Type(() => AppealsCreateWithoutRealtorInput)
    create?: Array<AppealsCreateWithoutRealtorInput>;

    @Field(() => [AppealsCreateOrConnectWithoutRealtorInput], {nullable:true})
    @Type(() => AppealsCreateOrConnectWithoutRealtorInput)
    connectOrCreate?: Array<AppealsCreateOrConnectWithoutRealtorInput>;

    @Field(() => [AppealsUpsertWithWhereUniqueWithoutRealtorInput], {nullable:true})
    @Type(() => AppealsUpsertWithWhereUniqueWithoutRealtorInput)
    upsert?: Array<AppealsUpsertWithWhereUniqueWithoutRealtorInput>;

    @Field(() => AppealsCreateManyRealtorInputEnvelope, {nullable:true})
    @Type(() => AppealsCreateManyRealtorInputEnvelope)
    createMany?: AppealsCreateManyRealtorInputEnvelope;

    @Field(() => [AppealsWhereUniqueInput], {nullable:true})
    @Type(() => AppealsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AppealsWhereUniqueInput, 'id' | 'houseId' | 'clientId' | 'realtorId'>>;

    @Field(() => [AppealsWhereUniqueInput], {nullable:true})
    @Type(() => AppealsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AppealsWhereUniqueInput, 'id' | 'houseId' | 'clientId' | 'realtorId'>>;

    @Field(() => [AppealsWhereUniqueInput], {nullable:true})
    @Type(() => AppealsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AppealsWhereUniqueInput, 'id' | 'houseId' | 'clientId' | 'realtorId'>>;

    @Field(() => [AppealsWhereUniqueInput], {nullable:true})
    @Type(() => AppealsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AppealsWhereUniqueInput, 'id' | 'houseId' | 'clientId' | 'realtorId'>>;

    @Field(() => [AppealsUpdateWithWhereUniqueWithoutRealtorInput], {nullable:true})
    @Type(() => AppealsUpdateWithWhereUniqueWithoutRealtorInput)
    update?: Array<AppealsUpdateWithWhereUniqueWithoutRealtorInput>;

    @Field(() => [AppealsUpdateManyWithWhereWithoutRealtorInput], {nullable:true})
    @Type(() => AppealsUpdateManyWithWhereWithoutRealtorInput)
    updateMany?: Array<AppealsUpdateManyWithWhereWithoutRealtorInput>;

    @Field(() => [AppealsScalarWhereInput], {nullable:true})
    @Type(() => AppealsScalarWhereInput)
    deleteMany?: Array<AppealsScalarWhereInput>;
}
