import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseCreateWithoutAppealInput } from './house-create-without-appeal.input';
import { Type } from 'class-transformer';
import { HouseCreateOrConnectWithoutAppealInput } from './house-create-or-connect-without-appeal.input';
import { Prisma } from '@prisma/client';
import { HouseWhereUniqueInput } from './house-where-unique.input';

@InputType()
export class HouseCreateNestedOneWithoutAppealInput {

    @Field(() => HouseCreateWithoutAppealInput, {nullable:true})
    @Type(() => HouseCreateWithoutAppealInput)
    create?: HouseCreateWithoutAppealInput;

    @Field(() => HouseCreateOrConnectWithoutAppealInput, {nullable:true})
    @Type(() => HouseCreateOrConnectWithoutAppealInput)
    connectOrCreate?: HouseCreateOrConnectWithoutAppealInput;

    @Field(() => HouseWhereUniqueInput, {nullable:true})
    @Type(() => HouseWhereUniqueInput)
    connect?: Prisma.AtLeast<HouseWhereUniqueInput, 'id'>;
}
