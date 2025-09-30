import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HouseWhereInput } from './house-where.input';
import { Type } from 'class-transformer';
import { HouseOrderByWithRelationInput } from './house-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { HouseWhereUniqueInput } from './house-where-unique.input';
import { Int } from '@nestjs/graphql';
import { HouseScalarFieldEnum } from './house-scalar-field.enum';

@ArgsType()
export class FindFirstHouseOrThrowArgs {

    @Field(() => HouseWhereInput, {nullable:true})
    @Type(() => HouseWhereInput)
    where?: HouseWhereInput;

    @Field(() => [HouseOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<HouseOrderByWithRelationInput>;

    @Field(() => HouseWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<HouseWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [HouseScalarFieldEnum], {nullable:true})
    distinct?: Array<`${HouseScalarFieldEnum}`>;
}
