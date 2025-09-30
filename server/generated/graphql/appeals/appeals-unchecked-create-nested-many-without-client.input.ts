import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealsCreateWithoutClientInput } from './appeals-create-without-client.input';
import { Type } from 'class-transformer';
import { AppealsCreateOrConnectWithoutClientInput } from './appeals-create-or-connect-without-client.input';
import { AppealsCreateManyClientInputEnvelope } from './appeals-create-many-client-input-envelope.input';
import { Prisma } from '@prisma/client';
import { AppealsWhereUniqueInput } from './appeals-where-unique.input';

@InputType()
export class AppealsUncheckedCreateNestedManyWithoutClientInput {

    @Field(() => [AppealsCreateWithoutClientInput], {nullable:true})
    @Type(() => AppealsCreateWithoutClientInput)
    create?: Array<AppealsCreateWithoutClientInput>;

    @Field(() => [AppealsCreateOrConnectWithoutClientInput], {nullable:true})
    @Type(() => AppealsCreateOrConnectWithoutClientInput)
    connectOrCreate?: Array<AppealsCreateOrConnectWithoutClientInput>;

    @Field(() => AppealsCreateManyClientInputEnvelope, {nullable:true})
    @Type(() => AppealsCreateManyClientInputEnvelope)
    createMany?: AppealsCreateManyClientInputEnvelope;

    @Field(() => [AppealsWhereUniqueInput], {nullable:true})
    @Type(() => AppealsWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<AppealsWhereUniqueInput, 'id' | 'houseId' | 'clientId' | 'realtorId'>>;
}
