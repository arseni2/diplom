import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealsCreateWithoutHouseInput } from './appeals-create-without-house.input';
import { Type } from 'class-transformer';
import { AppealsCreateOrConnectWithoutHouseInput } from './appeals-create-or-connect-without-house.input';
import { AppealsCreateManyHouseInputEnvelope } from './appeals-create-many-house-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AppealsWhereUniqueInput } from './appeals-where-unique.input';

@InputType()
export class AppealsUncheckedCreateNestedManyWithoutHouseInput {

    @Field(() => [AppealsCreateWithoutHouseInput], {nullable:true})
    @Type(() => AppealsCreateWithoutHouseInput)
    create?: Array<AppealsCreateWithoutHouseInput>;

    @Field(() => [AppealsCreateOrConnectWithoutHouseInput], {nullable:true})
    @Type(() => AppealsCreateOrConnectWithoutHouseInput)
    connectOrCreate?: Array<AppealsCreateOrConnectWithoutHouseInput>;

    @Field(() => AppealsCreateManyHouseInputEnvelope, {nullable:true})
    @Type(() => AppealsCreateManyHouseInputEnvelope)
    createMany?: AppealsCreateManyHouseInputEnvelope;

    @Field(() => [AppealsWhereUniqueInput], {nullable:true})
    @Type(() => AppealsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AppealsWhereUniqueInput, 'id'>>;
}
