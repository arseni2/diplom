import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { FeatureCountOrderByAggregateInput } from './feature-count-order-by-aggregate.input';
import { FeatureAvgOrderByAggregateInput } from './feature-avg-order-by-aggregate.input';
import { FeatureMaxOrderByAggregateInput } from './feature-max-order-by-aggregate.input';
import { FeatureMinOrderByAggregateInput } from './feature-min-order-by-aggregate.input';
import { FeatureSumOrderByAggregateInput } from './feature-sum-order-by-aggregate.input';

@InputType()
export class FeatureOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    value?: `${SortOrder}`;

    @Field(() => FeatureCountOrderByAggregateInput, {nullable:true})
    _count?: FeatureCountOrderByAggregateInput;

    @Field(() => FeatureAvgOrderByAggregateInput, {nullable:true})
    _avg?: FeatureAvgOrderByAggregateInput;

    @Field(() => FeatureMaxOrderByAggregateInput, {nullable:true})
    _max?: FeatureMaxOrderByAggregateInput;

    @Field(() => FeatureMinOrderByAggregateInput, {nullable:true})
    _min?: FeatureMinOrderByAggregateInput;

    @Field(() => FeatureSumOrderByAggregateInput, {nullable:true})
    _sum?: FeatureSumOrderByAggregateInput;
}
