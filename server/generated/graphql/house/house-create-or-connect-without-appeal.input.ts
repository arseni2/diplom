import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HouseWhereUniqueInput } from './house-where-unique.input';
import { Type } from 'class-transformer';
import { HouseCreateWithoutAppealInput } from './house-create-without-appeal.input';

@InputType()
export class HouseCreateOrConnectWithoutAppealInput {

    @Field(() => HouseWhereUniqueInput, {nullable:false})
    @Type(() => HouseWhereUniqueInput)
    where!: Prisma.AtLeast<HouseWhereUniqueInput, 'id'>;

    @Field(() => HouseCreateWithoutAppealInput, {nullable:false})
    @Type(() => HouseCreateWithoutAppealInput)
    create!: HouseCreateWithoutAppealInput;
}
