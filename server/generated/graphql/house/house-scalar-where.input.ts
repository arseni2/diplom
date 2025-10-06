import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';

@InputType()
export class HouseScalarWhereInput {

    @Field(() => [HouseScalarWhereInput], {nullable:true})
    AND?: Array<HouseScalarWhereInput>;

    @Field(() => [HouseScalarWhereInput], {nullable:true})
    OR?: Array<HouseScalarWhereInput>;

    @Field(() => [HouseScalarWhereInput], {nullable:true})
    NOT?: Array<HouseScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    description?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    address?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    square?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    remont?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    floor?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    rooms?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    bio?: StringFilter;

    @Field(() => IntFilter, {nullable:true})
    price?: IntFilter;

    @Field(() => BoolFilter, {nullable:true})
    isRent?: BoolFilter;

    @Field(() => BoolFilter, {nullable:true})
    isSell?: BoolFilter;

    @Field(() => IntFilter, {nullable:true})
    realtorId?: IntFilter;
}
