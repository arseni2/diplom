import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { HouseCountOrderByAggregateInput } from './house-count-order-by-aggregate.input';
import { HouseAvgOrderByAggregateInput } from './house-avg-order-by-aggregate.input';
import { HouseMaxOrderByAggregateInput } from './house-max-order-by-aggregate.input';
import { HouseMinOrderByAggregateInput } from './house-min-order-by-aggregate.input';
import { HouseSumOrderByAggregateInput } from './house-sum-order-by-aggregate.input';

@InputType()
export class HouseOrderByWithAggregationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    description?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    address?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    square?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    remont?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    floor?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    rooms?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    bio?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    price?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    isRent?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    isSell?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    realtorId?: `${SortOrder}`;

    @Field(() => HouseCountOrderByAggregateInput, {nullable:true})
    _count?: HouseCountOrderByAggregateInput;

    @Field(() => HouseAvgOrderByAggregateInput, {nullable:true})
    _avg?: HouseAvgOrderByAggregateInput;

    @Field(() => HouseMaxOrderByAggregateInput, {nullable:true})
    _max?: HouseMaxOrderByAggregateInput;

    @Field(() => HouseMinOrderByAggregateInput, {nullable:true})
    _min?: HouseMinOrderByAggregateInput;

    @Field(() => HouseSumOrderByAggregateInput, {nullable:true})
    _sum?: HouseSumOrderByAggregateInput;
}
