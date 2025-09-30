import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { HouseNullableScalarRelationFilter } from '../house/house-nullable-scalar-relation-filter.input';

@InputType()
export class FeatureWhereInput {

    @Field(() => [FeatureWhereInput], {nullable:true})
    AND?: Array<FeatureWhereInput>;

    @Field(() => [FeatureWhereInput], {nullable:true})
    OR?: Array<FeatureWhereInput>;

    @Field(() => [FeatureWhereInput], {nullable:true})
    NOT?: Array<FeatureWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    value?: StringFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    houseId?: IntNullableFilter;

    @Field(() => HouseNullableScalarRelationFilter, {nullable:true})
    house?: HouseNullableScalarRelationFilter;
}
