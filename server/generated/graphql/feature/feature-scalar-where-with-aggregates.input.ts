import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntWithAggregatesFilter } from '../prisma/int-with-aggregates-filter.input';
import { StringWithAggregatesFilter } from '../prisma/string-with-aggregates-filter.input';
import { IntNullableWithAggregatesFilter } from '../prisma/int-nullable-with-aggregates-filter.input';

@InputType()
export class FeatureScalarWhereWithAggregatesInput {

    @Field(() => [FeatureScalarWhereWithAggregatesInput], {nullable:true})
    AND?: Array<FeatureScalarWhereWithAggregatesInput>;

    @Field(() => [FeatureScalarWhereWithAggregatesInput], {nullable:true})
    OR?: Array<FeatureScalarWhereWithAggregatesInput>;

    @Field(() => [FeatureScalarWhereWithAggregatesInput], {nullable:true})
    NOT?: Array<FeatureScalarWhereWithAggregatesInput>;

    @Field(() => IntWithAggregatesFilter, {nullable:true})
    id?: IntWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    title?: StringWithAggregatesFilter;

    @Field(() => StringWithAggregatesFilter, {nullable:true})
    value?: StringWithAggregatesFilter;

    @Field(() => IntNullableWithAggregatesFilter, {nullable:true})
    houseId?: IntNullableWithAggregatesFilter;
}
