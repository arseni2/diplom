import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppealsWhereUniqueInput } from './appeals-where-unique.input';
import { Type } from 'class-transformer';
import { AppealsCreateWithoutClientInput } from './appeals-create-without-client.input';

@InputType()
export class AppealsCreateOrConnectWithoutClientInput {

    @Field(() => AppealsWhereUniqueInput, {nullable:false})
    @Type(() => AppealsWhereUniqueInput)
    where!: Prisma.AtLeast<AppealsWhereUniqueInput, 'id' | 'houseId' | 'clientId' | 'realtorId'>;

    @Field(() => AppealsCreateWithoutClientInput, {nullable:false})
    @Type(() => AppealsCreateWithoutClientInput)
    create!: AppealsCreateWithoutClientInput;
}
