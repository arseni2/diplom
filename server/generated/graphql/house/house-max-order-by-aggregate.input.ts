import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class HouseMaxOrderByAggregateInput {

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

    @Field(() => SortOrder, {nullable:true})
    floor?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    rooms?: `${SortOrder}`;

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
}
