import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { AppealsCountOrderByAggregateInput } from './appeals-count-order-by-aggregate.input';
import { AppealsAvgOrderByAggregateInput } from './appeals-avg-order-by-aggregate.input';
import { AppealsMaxOrderByAggregateInput } from './appeals-max-order-by-aggregate.input';
import { AppealsMinOrderByAggregateInput } from './appeals-min-order-by-aggregate.input';
import { AppealsSumOrderByAggregateInput } from './appeals-sum-order-by-aggregate.input';

@InputType()
export class AppealsOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    status?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    comment?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    houseId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    clientId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    realtorId?: SortOrderInput;

    @Field(() => AppealsCountOrderByAggregateInput, {nullable:true})
    _count?: AppealsCountOrderByAggregateInput;

    @Field(() => AppealsAvgOrderByAggregateInput, {nullable:true})
    _avg?: AppealsAvgOrderByAggregateInput;

    @Field(() => AppealsMaxOrderByAggregateInput, {nullable:true})
    _max?: AppealsMaxOrderByAggregateInput;

    @Field(() => AppealsMinOrderByAggregateInput, {nullable:true})
    _min?: AppealsMinOrderByAggregateInput;

    @Field(() => AppealsSumOrderByAggregateInput, {nullable:true})
    _sum?: AppealsSumOrderByAggregateInput;
}
