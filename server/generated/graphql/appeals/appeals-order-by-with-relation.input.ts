import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { HouseOrderByWithRelationInput } from '../house/house-order-by-with-relation.input';
import { UserOrderByWithRelationInput } from '../user/user-order-by-with-relation.input';

@InputType()
export class AppealsOrderByWithRelationInput {

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

    @Field(() => HouseOrderByWithRelationInput, {nullable:true})
    house?: HouseOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    client?: UserOrderByWithRelationInput;

    @Field(() => UserOrderByWithRelationInput, {nullable:true})
    realtor?: UserOrderByWithRelationInput;
}
