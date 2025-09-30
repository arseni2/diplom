import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeatureWhereInput } from './feature-where.input';
import { Type } from 'class-transformer';
import { FeatureOrderByWithAggregationInput } from './feature-order-by-with-aggregation.input';
import { FeatureScalarFieldEnum } from './feature-scalar-field.enum';
import { FeatureScalarWhereWithAggregatesInput } from './feature-scalar-where-with-aggregates.input';
import { Int } from '@nestjs/graphql';
import { FeatureCountAggregateInput } from './feature-count-aggregate.input';
import { FeatureAvgAggregateInput } from './feature-avg-aggregate.input';
import { FeatureSumAggregateInput } from './feature-sum-aggregate.input';
import { FeatureMinAggregateInput } from './feature-min-aggregate.input';
import { FeatureMaxAggregateInput } from './feature-max-aggregate.input';

@ArgsType()
export class FeatureGroupByArgs {

    @Field(() => FeatureWhereInput, {nullable:true})
    @Type(() => FeatureWhereInput)
    where?: FeatureWhereInput;

    @Field(() => [FeatureOrderByWithAggregationInput], {nullable:true})
    orderBy?: Array<FeatureOrderByWithAggregationInput>;

    @Field(() => [FeatureScalarFieldEnum], {nullable:false})
    by!: Array<`${FeatureScalarFieldEnum}`>;

    @Field(() => FeatureScalarWhereWithAggregatesInput, {nullable:true})
    having?: FeatureScalarWhereWithAggregatesInput;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => FeatureCountAggregateInput, {nullable:true})
    _count?: FeatureCountAggregateInput;

    @Field(() => FeatureAvgAggregateInput, {nullable:true})
    _avg?: FeatureAvgAggregateInput;

    @Field(() => FeatureSumAggregateInput, {nullable:true})
    _sum?: FeatureSumAggregateInput;

    @Field(() => FeatureMinAggregateInput, {nullable:true})
    _min?: FeatureMinAggregateInput;

    @Field(() => FeatureMaxAggregateInput, {nullable:true})
    _max?: FeatureMaxAggregateInput;
}
