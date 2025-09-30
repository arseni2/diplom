import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealsCreateWithoutHouseInput } from './appeals-create-without-house.input';
import { Type } from 'class-transformer';
import { AppealsCreateOrConnectWithoutHouseInput } from './appeals-create-or-connect-without-house.input';
import { Prisma } from '@prisma/client';
import { AppealsWhereUniqueInput } from './appeals-where-unique.input';

@InputType()
export class AppealsCreateNestedOneWithoutHouseInput {

    @Field(() => AppealsCreateWithoutHouseInput, {nullable:true})
    @Type(() => AppealsCreateWithoutHouseInput)
    create?: AppealsCreateWithoutHouseInput;

    @Field(() => AppealsCreateOrConnectWithoutHouseInput, {nullable:true})
    @Type(() => AppealsCreateOrConnectWithoutHouseInput)
    connectOrCreate?: AppealsCreateOrConnectWithoutHouseInput;

    @Field(() => AppealsWhereUniqueInput, {nullable:true})
    @Type(() => AppealsWhereUniqueInput)
    connect?: Prisma.AtLeast<AppealsWhereUniqueInput, 'id' | 'houseId' | 'clientId' | 'realtorId'>;
}
