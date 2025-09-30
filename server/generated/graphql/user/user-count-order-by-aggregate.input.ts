import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';

@InputType()
export class UserCountOrderByAggregateInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    firstname?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    lastname?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    middlename?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    telephone?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    tg?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    roleId?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    avatarId?: `${SortOrder}`;
}
