import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppealsWhereUniqueInput } from './appeals-where-unique.input';
import { Type } from 'class-transformer';
import { AppealsUpdateWithoutHouseInput } from './appeals-update-without-house.input';

@InputType()
export class AppealsUpdateWithWhereUniqueWithoutHouseInput {

    @Field(() => AppealsWhereUniqueInput, {nullable:false})
    @Type(() => AppealsWhereUniqueInput)
    where!: Prisma.AtLeast<AppealsWhereUniqueInput, 'id'>;

    @Field(() => AppealsUpdateWithoutHouseInput, {nullable:false})
    @Type(() => AppealsUpdateWithoutHouseInput)
    data!: AppealsUpdateWithoutHouseInput;
}
