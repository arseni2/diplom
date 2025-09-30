import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HouseWhereUniqueInput } from './house-where-unique.input';
import { Type } from 'class-transformer';
import { HouseCreateWithoutRealtorInput } from './house-create-without-realtor.input';

@InputType()
export class HouseCreateOrConnectWithoutRealtorInput {

    @Field(() => HouseWhereUniqueInput, {nullable:false})
    @Type(() => HouseWhereUniqueInput)
    where!: Prisma.AtLeast<HouseWhereUniqueInput, 'id'>;

    @Field(() => HouseCreateWithoutRealtorInput, {nullable:false})
    @Type(() => HouseCreateWithoutRealtorInput)
    create!: HouseCreateWithoutRealtorInput;
}
