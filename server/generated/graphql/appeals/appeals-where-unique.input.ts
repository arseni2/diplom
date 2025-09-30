import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AppealsWhereInput } from './appeals-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { HouseNullableScalarRelationFilter } from '../house/house-nullable-scalar-relation-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';

@InputType()
export class AppealsWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Int, {nullable:true})
    houseId?: number;

    @Field(() => Int, {nullable:true})
    clientId?: number;

    @Field(() => Int, {nullable:true})
    realtorId?: number;

    @Field(() => [AppealsWhereInput], {nullable:true})
    AND?: Array<AppealsWhereInput>;

    @Field(() => [AppealsWhereInput], {nullable:true})
    OR?: Array<AppealsWhereInput>;

    @Field(() => [AppealsWhereInput], {nullable:true})
    NOT?: Array<AppealsWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    comment?: StringFilter;

    @Field(() => HouseNullableScalarRelationFilter, {nullable:true})
    house?: HouseNullableScalarRelationFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    client?: UserNullableScalarRelationFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    realtor?: UserNullableScalarRelationFilter;
}
