import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { HouseOrderByRelationAggregateInput } from '../house/house-order-by-relation-aggregate.input';

@InputType()
export class FeatureOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    value?: `${SortOrder}`;

    @Field(() => HouseOrderByRelationAggregateInput, {nullable:true})
    houses?: HouseOrderByRelationAggregateInput;
}
