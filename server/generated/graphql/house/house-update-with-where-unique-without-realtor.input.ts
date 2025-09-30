import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HouseWhereUniqueInput } from './house-where-unique.input';
import { Type } from 'class-transformer';
import { HouseUpdateWithoutRealtorInput } from './house-update-without-realtor.input';

@InputType()
export class HouseUpdateWithWhereUniqueWithoutRealtorInput {

    @Field(() => HouseWhereUniqueInput, {nullable:false})
    @Type(() => HouseWhereUniqueInput)
    where!: Prisma.AtLeast<HouseWhereUniqueInput, 'id'>;

    @Field(() => HouseUpdateWithoutRealtorInput, {nullable:false})
    @Type(() => HouseUpdateWithoutRealtorInput)
    data!: HouseUpdateWithoutRealtorInput;
}
