import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppealsWhereUniqueInput } from './appeals-where-unique.input';
import { Type } from 'class-transformer';
import { AppealsCreateWithoutHouseInput } from './appeals-create-without-house.input';

@InputType()
export class AppealsCreateOrConnectWithoutHouseInput {

    @Field(() => AppealsWhereUniqueInput, {nullable:false})
    @Type(() => AppealsWhereUniqueInput)
    where!: Prisma.AtLeast<AppealsWhereUniqueInput, 'id' | 'houseId' | 'clientId' | 'realtorId'>;

    @Field(() => AppealsCreateWithoutHouseInput, {nullable:false})
    @Type(() => AppealsCreateWithoutHouseInput)
    create!: AppealsCreateWithoutHouseInput;
}
