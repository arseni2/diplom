import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseCreateWithoutRealtorInput } from './house-create-without-realtor.input';
import { Type } from 'class-transformer';
import { HouseCreateOrConnectWithoutRealtorInput } from './house-create-or-connect-without-realtor.input';
import { HouseUpsertWithWhereUniqueWithoutRealtorInput } from './house-upsert-with-where-unique-without-realtor.input';
import { HouseCreateManyRealtorInputEnvelope } from './house-create-many-realtor-input-envelope.input';
import { Prisma } from '@prisma/client';
import { HouseWhereUniqueInput } from './house-where-unique.input';
import { HouseUpdateWithWhereUniqueWithoutRealtorInput } from './house-update-with-where-unique-without-realtor.input';
import { HouseUpdateManyWithWhereWithoutRealtorInput } from './house-update-many-with-where-without-realtor.input';
import { HouseScalarWhereInput } from './house-scalar-where.input';

@InputType()
export class HouseUncheckedUpdateManyWithoutRealtorNestedInput {

    @Field(() => [HouseCreateWithoutRealtorInput], {nullable:true})
    @Type(() => HouseCreateWithoutRealtorInput)
    create?: Array<HouseCreateWithoutRealtorInput>;

    @Field(() => [HouseCreateOrConnectWithoutRealtorInput], {nullable:true})
    @Type(() => HouseCreateOrConnectWithoutRealtorInput)
    connectOrCreate?: Array<HouseCreateOrConnectWithoutRealtorInput>;

    @Field(() => [HouseUpsertWithWhereUniqueWithoutRealtorInput], {nullable:true})
    @Type(() => HouseUpsertWithWhereUniqueWithoutRealtorInput)
    upsert?: Array<HouseUpsertWithWhereUniqueWithoutRealtorInput>;

    @Field(() => HouseCreateManyRealtorInputEnvelope, {nullable:true})
    @Type(() => HouseCreateManyRealtorInputEnvelope)
    createMany?: HouseCreateManyRealtorInputEnvelope;

    @Field(() => [HouseWhereUniqueInput], {nullable:true})
    @Type(() => HouseWhereUniqueInput)
    set?: Array<Prisma.AtLeast<HouseWhereUniqueInput, 'id'>>;

    @Field(() => [HouseWhereUniqueInput], {nullable:true})
    @Type(() => HouseWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<HouseWhereUniqueInput, 'id'>>;

    @Field(() => [HouseWhereUniqueInput], {nullable:true})
    @Type(() => HouseWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<HouseWhereUniqueInput, 'id'>>;

    @Field(() => [HouseWhereUniqueInput], {nullable:true})
    @Type(() => HouseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HouseWhereUniqueInput, 'id'>>;

    @Field(() => [HouseUpdateWithWhereUniqueWithoutRealtorInput], {nullable:true})
    @Type(() => HouseUpdateWithWhereUniqueWithoutRealtorInput)
    update?: Array<HouseUpdateWithWhereUniqueWithoutRealtorInput>;

    @Field(() => [HouseUpdateManyWithWhereWithoutRealtorInput], {nullable:true})
    @Type(() => HouseUpdateManyWithWhereWithoutRealtorInput)
    updateMany?: Array<HouseUpdateManyWithWhereWithoutRealtorInput>;

    @Field(() => [HouseScalarWhereInput], {nullable:true})
    @Type(() => HouseScalarWhereInput)
    deleteMany?: Array<HouseScalarWhereInput>;
}
