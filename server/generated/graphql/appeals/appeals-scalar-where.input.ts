import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class AppealsScalarWhereInput {

    @Field(() => [AppealsScalarWhereInput], {nullable:true})
    AND?: Array<AppealsScalarWhereInput>;

    @Field(() => [AppealsScalarWhereInput], {nullable:true})
    OR?: Array<AppealsScalarWhereInput>;

    @Field(() => [AppealsScalarWhereInput], {nullable:true})
    NOT?: Array<AppealsScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    status?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    comment?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    houseId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    clientId?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    realtorId?: IntNullableFilter;
}
