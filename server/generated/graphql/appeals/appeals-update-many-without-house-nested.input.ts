import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealsCreateWithoutHouseInput } from './appeals-create-without-house.input';
import { Type } from 'class-transformer';
import { AppealsCreateOrConnectWithoutHouseInput } from './appeals-create-or-connect-without-house.input';
import { AppealsUpsertWithWhereUniqueWithoutHouseInput } from './appeals-upsert-with-where-unique-without-house.input';
import { AppealsCreateManyHouseInputEnvelope } from './appeals-create-many-house-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AppealsWhereUniqueInput } from './appeals-where-unique.input';
import { AppealsUpdateWithWhereUniqueWithoutHouseInput } from './appeals-update-with-where-unique-without-house.input';
import { AppealsUpdateManyWithWhereWithoutHouseInput } from './appeals-update-many-with-where-without-house.input';
import { AppealsScalarWhereInput } from './appeals-scalar-where.input';

@InputType()
export class AppealsUpdateManyWithoutHouseNestedInput {

    @Field(() => [AppealsCreateWithoutHouseInput], {nullable:true})
    @Type(() => AppealsCreateWithoutHouseInput)
    create?: Array<AppealsCreateWithoutHouseInput>;

    @Field(() => [AppealsCreateOrConnectWithoutHouseInput], {nullable:true})
    @Type(() => AppealsCreateOrConnectWithoutHouseInput)
    connectOrCreate?: Array<AppealsCreateOrConnectWithoutHouseInput>;

    @Field(() => [AppealsUpsertWithWhereUniqueWithoutHouseInput], {nullable:true})
    @Type(() => AppealsUpsertWithWhereUniqueWithoutHouseInput)
    upsert?: Array<AppealsUpsertWithWhereUniqueWithoutHouseInput>;

    @Field(() => AppealsCreateManyHouseInputEnvelope, {nullable:true})
    @Type(() => AppealsCreateManyHouseInputEnvelope)
    createMany?: AppealsCreateManyHouseInputEnvelope;

    @Field(() => [AppealsWhereUniqueInput], {nullable:true})
    @Type(() => AppealsWhereUniqueInput)
    set?: Array<Prisma.AtLeast<AppealsWhereUniqueInput, 'id'>>;

    @Field(() => [AppealsWhereUniqueInput], {nullable:true})
    @Type(() => AppealsWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<AppealsWhereUniqueInput, 'id'>>;

    @Field(() => [AppealsWhereUniqueInput], {nullable:true})
    @Type(() => AppealsWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<AppealsWhereUniqueInput, 'id'>>;

    @Field(() => [AppealsWhereUniqueInput], {nullable:true})
    @Type(() => AppealsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AppealsWhereUniqueInput, 'id'>>;

    @Field(() => [AppealsUpdateWithWhereUniqueWithoutHouseInput], {nullable:true})
    @Type(() => AppealsUpdateWithWhereUniqueWithoutHouseInput)
    update?: Array<AppealsUpdateWithWhereUniqueWithoutHouseInput>;

    @Field(() => [AppealsUpdateManyWithWhereWithoutHouseInput], {nullable:true})
    @Type(() => AppealsUpdateManyWithWhereWithoutHouseInput)
    updateMany?: Array<AppealsUpdateManyWithWhereWithoutHouseInput>;

    @Field(() => [AppealsScalarWhereInput], {nullable:true})
    @Type(() => AppealsScalarWhereInput)
    deleteMany?: Array<AppealsScalarWhereInput>;
}
