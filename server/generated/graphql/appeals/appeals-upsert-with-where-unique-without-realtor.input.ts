import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppealsWhereUniqueInput } from './appeals-where-unique.input';
import { Type } from 'class-transformer';
import { AppealsUpdateWithoutRealtorInput } from './appeals-update-without-realtor.input';
import { AppealsCreateWithoutRealtorInput } from './appeals-create-without-realtor.input';

@InputType()
export class AppealsUpsertWithWhereUniqueWithoutRealtorInput {

    @Field(() => AppealsWhereUniqueInput, {nullable:false})
    @Type(() => AppealsWhereUniqueInput)
    where!: Prisma.AtLeast<AppealsWhereUniqueInput, 'id' | 'houseId' | 'clientId' | 'realtorId'>;

    @Field(() => AppealsUpdateWithoutRealtorInput, {nullable:false})
    @Type(() => AppealsUpdateWithoutRealtorInput)
    update!: AppealsUpdateWithoutRealtorInput;

    @Field(() => AppealsCreateWithoutRealtorInput, {nullable:false})
    @Type(() => AppealsCreateWithoutRealtorInput)
    create!: AppealsCreateWithoutRealtorInput;
}
