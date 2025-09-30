import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealsCreateWithoutHouseInput } from './appeals-create-without-house.input';
import { Type } from 'class-transformer';
import { AppealsCreateOrConnectWithoutHouseInput } from './appeals-create-or-connect-without-house.input';
import { AppealsUpsertWithoutHouseInput } from './appeals-upsert-without-house.input';
import { AppealsWhereInput } from './appeals-where.input';
import { Prisma } from '@prisma/client';
import { AppealsWhereUniqueInput } from './appeals-where-unique.input';
import { AppealsUpdateToOneWithWhereWithoutHouseInput } from './appeals-update-to-one-with-where-without-house.input';

@InputType()
export class AppealsUpdateOneWithoutHouseNestedInput {

    @Field(() => AppealsCreateWithoutHouseInput, {nullable:true})
    @Type(() => AppealsCreateWithoutHouseInput)
    create?: AppealsCreateWithoutHouseInput;

    @Field(() => AppealsCreateOrConnectWithoutHouseInput, {nullable:true})
    @Type(() => AppealsCreateOrConnectWithoutHouseInput)
    connectOrCreate?: AppealsCreateOrConnectWithoutHouseInput;

    @Field(() => AppealsUpsertWithoutHouseInput, {nullable:true})
    @Type(() => AppealsUpsertWithoutHouseInput)
    upsert?: AppealsUpsertWithoutHouseInput;

    @Field(() => AppealsWhereInput, {nullable:true})
    @Type(() => AppealsWhereInput)
    disconnect?: AppealsWhereInput;

    @Field(() => AppealsWhereInput, {nullable:true})
    @Type(() => AppealsWhereInput)
    delete?: AppealsWhereInput;

    @Field(() => AppealsWhereUniqueInput, {nullable:true})
    @Type(() => AppealsWhereUniqueInput)
    connect?: Prisma.AtLeast<AppealsWhereUniqueInput, 'id' | 'houseId' | 'clientId' | 'realtorId'>;

    @Field(() => AppealsUpdateToOneWithWhereWithoutHouseInput, {nullable:true})
    @Type(() => AppealsUpdateToOneWithWhereWithoutHouseInput)
    update?: AppealsUpdateToOneWithWhereWithoutHouseInput;
}
