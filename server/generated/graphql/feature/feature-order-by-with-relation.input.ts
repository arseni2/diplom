import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { HouseOrderByWithRelationInput } from '../house/house-order-by-with-relation.input';

@InputType()
export class FeatureOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    title?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    value?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    houseId?: SortOrderInput;

    @Field(() => HouseOrderByWithRelationInput, {nullable:true})
    house?: HouseOrderByWithRelationInput;
}
