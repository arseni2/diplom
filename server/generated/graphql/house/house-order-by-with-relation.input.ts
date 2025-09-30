import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';
import { FileOrderByRelationAggregateInput } from '../file/file-order-by-relation-aggregate.input';
import { FeatureOrderByRelationAggregateInput } from '../feature/feature-order-by-relation-aggregate.input';
import { AppealsOrderByWithRelationInput } from '../appeals/appeals-order-by-with-relation.input';

@InputType()
export class HouseOrderByWithRelationInput {

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

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    realtor?: UserOrderByWithRelationInput;

    @Field(() => FileOrderByRelationAggregateInput, {nullable:true})
    images?: FileOrderByRelationAggregateInput;

    @Field(() => FeatureOrderByRelationAggregateInput, {nullable:true})
    features?: FeatureOrderByRelationAggregateInput;

    @Field(() => AppealsOrderByWithRelationInput, {nullable:true})
    appeal?: AppealsOrderByWithRelationInput;
}
