import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeatureWhereInput } from './feature-where.input';
import { Type } from 'class-transformer';
import { FeatureOrderByWithRelationInput } from './feature-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FeatureWhereUniqueInput } from './feature-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FeatureCountAggregateInput } from './feature-count-aggregate.input';
import { FeatureAvgAggregateInput } from './feature-avg-aggregate.input';
import { FeatureSumAggregateInput } from './feature-sum-aggregate.input';
import { FeatureMinAggregateInput } from './feature-min-aggregate.input';
import { FeatureMaxAggregateInput } from './feature-max-aggregate.input';

@ArgsType()
export class FeatureAggregateArgs {

    @Field(() => FeatureWhereInput, {nullable:true})
    @Type(() => FeatureWhereInput)
    where?: FeatureWhereInput;

    @Field(() => [FeatureOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FeatureOrderByWithRelationInput>;

    @Field(() => FeatureWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FeatureWhereUniqueInput, 'id'>;

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
