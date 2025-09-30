import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeatureWhereInput } from './feature-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { HouseNullableScalarRelationFilter } from '../house/house-nullable-scalar-relation-filter.input';

@InputType()
export class FeatureWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => [FeatureWhereInput], {nullable:true})
    AND?: Array<FeatureWhereInput>;

    @Field(() => [FeatureWhereInput], {nullable:true})
    OR?: Array<FeatureWhereInput>;

    @Field(() => [FeatureWhereInput], {nullable:true})
    NOT?: Array<FeatureWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    value?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    houseId?: IntNullableFilter;

    @Field(() => HouseNullableScalarRelationFilter, {nullable:true})
    house?: HouseNullableScalarRelationFilter;
}
