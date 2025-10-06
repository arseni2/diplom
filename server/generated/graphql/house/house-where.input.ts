import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { BoolFilter } from '../prisma/bool-filter.input';
import { UserScalarRelationFilter } from '../user/user-scalar-relation-filter.input';
import { FileListRelationFilter } from '../file/file-list-relation-filter.input';
import { FeatureListRelationFilter } from '../feature/feature-list-relation-filter.input';
import { AppealsNullableScalarRelationFilter } from '../appeals/appeals-nullable-scalar-relation-filter.input';

@InputType()
export class HouseWhereInput {

    @Field(() => [HouseWhereInput], {nullable:true})
    AND?: Array<HouseWhereInput>;

    @Field(() => [HouseWhereInput], {nullable:true})
    OR?: Array<HouseWhereInput>;

    @Field(() => [HouseWhereInput], {nullable:true})
    NOT?: Array<HouseWhereInput>;

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

    @Field(() => UserScalarRelationFilter, {nullable:true})
    realtor?: UserScalarRelationFilter;

    @Field(() => FileListRelationFilter, {nullable:true})
    images?: FileListRelationFilter;

    @Field(() => FeatureListRelationFilter, {nullable:true})
    features?: FeatureListRelationFilter;

    @Field(() => AppealsNullableScalarRelationFilter, {nullable:true})
    appeal?: AppealsNullableScalarRelationFilter;
}
