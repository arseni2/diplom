import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FeatureWhereInput } from './feature-where.input';
import { StringFilter } from '../prisma/string-filter.input';
import { HouseListRelationFilter } from '../house/house-list-relation-filter.input';

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

    @Field(() => HouseListRelationFilter, {nullable:true})
    houses?: HouseListRelationFilter;
}
