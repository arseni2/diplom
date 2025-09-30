import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { AppealsWhereInput } from './appeals-where.input';
import { Type } from 'class-transformer';
import { AppealsOrderByWithRelationInput } from './appeals-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { AppealsWhereUniqueInput } from './appeals-where-unique.input';
import { Int } from '@nestjs/graphql';
import { AppealsScalarFieldEnum } from './appeals-scalar-field.enum';

@ArgsType()
export class FindFirstAppealsOrThrowArgs {

    @Field(() => AppealsWhereInput, {nullable:true})
    @Type(() => AppealsWhereInput)
    where?: AppealsWhereInput;

    @Field(() => [AppealsOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<AppealsOrderByWithRelationInput>;

    @Field(() => AppealsWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<AppealsWhereUniqueInput, 'id' | 'houseId' | 'clientId' | 'realtorId'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [AppealsScalarFieldEnum], {nullable:true})
    distinct?: Array<`${AppealsScalarFieldEnum}`>;
}
