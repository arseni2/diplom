import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { FeatureCountAggregate } from './feature-count-aggregate.output';
import { FeatureAvgAggregate } from './feature-avg-aggregate.output';
import { FeatureSumAggregate } from './feature-sum-aggregate.output';
import { FeatureMinAggregate } from './feature-min-aggregate.output';
import { FeatureMaxAggregate } from './feature-max-aggregate.output';

@ObjectType()
export class AggregateFeature {

    @Field(() => FeatureCountAggregate, {nullable:true})
    _count?: FeatureCountAggregate;

    @Field(() => FeatureAvgAggregate, {nullable:true})
    _avg?: FeatureAvgAggregate;

    @Field(() => FeatureSumAggregate, {nullable:true})
    _sum?: FeatureSumAggregate;

    @Field(() => FeatureMinAggregate, {nullable:true})
    _min?: FeatureMinAggregate;

    @Field(() => FeatureMaxAggregate, {nullable:true})
    _max?: FeatureMaxAggregate;
}
