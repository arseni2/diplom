import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { AppealsWhereUniqueInput } from './appeals-where-unique.input';
import { Type } from 'class-transformer';
import { AppealsCreateInput } from './appeals-create.input';
import { AppealsUpdateInput } from './appeals-update.input';

@ArgsType()
export class UpsertOneAppealsArgs {

    @Field(() => AppealsWhereUniqueInput, {nullable:false})
    @Type(() => AppealsWhereUniqueInput)
    where!: Prisma.AtLeast<AppealsWhereUniqueInput, 'id' | 'houseId' | 'clientId' | 'realtorId'>;

    @Field(() => AppealsCreateInput, {nullable:false})
    @Type(() => AppealsCreateInput)
    create!: AppealsCreateInput;

    @Field(() => AppealsUpdateInput, {nullable:false})
    @Type(() => AppealsUpdateInput)
    update!: AppealsUpdateInput;
}
