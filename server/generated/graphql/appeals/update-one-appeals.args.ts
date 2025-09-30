import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppealsUpdateInput } from './appeals-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { AppealsWhereUniqueInput } from './appeals-where-unique.input';

@ArgsType()
export class UpdateOneAppealsArgs {

    @Field(() => AppealsUpdateInput, {nullable:false})
    @Type(() => AppealsUpdateInput)
    data!: AppealsUpdateInput;

    @Field(() => AppealsWhereUniqueInput, {nullable:false})
    @Type(() => AppealsWhereUniqueInput)
    where!: Prisma.AtLeast<AppealsWhereUniqueInput, 'id' | 'houseId' | 'clientId' | 'realtorId'>;
}
