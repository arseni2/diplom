import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { HouseListRelationFilter } from '../house/house-list-relation-filter.input';

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

    @Field(() => HouseListRelationFilter, {nullable:true})
    houses?: HouseListRelationFilter;
}
