import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealsCreateWithoutClientInput } from './appeals-create-without-client.input';
import { Type } from 'class-transformer';
import { AppealsCreateOrConnectWithoutClientInput } from './appeals-create-or-connect-without-client.input';
import { AppealsUpsertWithWhereUniqueWithoutClientInput } from './appeals-upsert-with-where-unique-without-client.input';
import { AppealsCreateManyClientInputEnvelope } from './appeals-create-many-client-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AppealsWhereUniqueInput } from './appeals-where-unique.input';
import { AppealsUpdateWithWhereUniqueWithoutClientInput } from './appeals-update-with-where-unique-without-client.input';
import { AppealsUpdateManyWithWhereWithoutClientInput } from './appeals-update-many-with-where-without-client.input';
import { AppealsScalarWhereInput } from './appeals-scalar-where.input';

@InputType()
export class AppealsUpdateManyWithoutClientNestedInput {

    @Field(() => [AppealsCreateWithoutClientInput], {nullable:true})
    @Type(() => AppealsCreateWithoutClientInput)
    create?: Array<AppealsCreateWithoutClientInput>;

    @Field(() => [AppealsCreateOrConnectWithoutClientInput], {nullable:true})
    @Type(() => AppealsCreateOrConnectWithoutClientInput)
    connectOrCreate?: Array<AppealsCreateOrConnectWithoutClientInput>;

    @Field(() => [AppealsUpsertWithWhereUniqueWithoutClientInput], {nullable:true})
    @Type(() => AppealsUpsertWithWhereUniqueWithoutClientInput)
    upsert?: Array<AppealsUpsertWithWhereUniqueWithoutClientInput>;

    @Field(() => AppealsCreateManyClientInputEnvelope, {nullable:true})
    @Type(() => AppealsCreateManyClientInputEnvelope)
    createMany?: AppealsCreateManyClientInputEnvelope;

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

    @Field(() => [AppealsUpdateWithWhereUniqueWithoutClientInput], {nullable:true})
    @Type(() => AppealsUpdateWithWhereUniqueWithoutClientInput)
    update?: Array<AppealsUpdateWithWhereUniqueWithoutClientInput>;

    @Field(() => [AppealsUpdateManyWithWhereWithoutClientInput], {nullable:true})
    @Type(() => AppealsUpdateManyWithWhereWithoutClientInput)
    updateMany?: Array<AppealsUpdateManyWithWhereWithoutClientInput>;

    @Field(() => [AppealsScalarWhereInput], {nullable:true})
    @Type(() => AppealsScalarWhereInput)
    deleteMany?: Array<AppealsScalarWhereInput>;
}
