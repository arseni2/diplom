import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { SortOrder } from '../prisma/sort-order.enum';
import { SortOrderInput } from '../prisma/sort-order.input';
import { RoleOrderByWithRelationInput } from '../role/role-order-by-with-relation.input';
import { FileOrderByWithRelationInput } from '../file/file-order-by-with-relation.input';
import { HouseOrderByRelationAggregateInput } from '../house/house-order-by-relation-aggregate.input';
import { AppealsOrderByRelationAggregateInput } from '../appeals/appeals-order-by-relation-aggregate.input';

@InputType()
export class UserOrderByWithRelationInput {

    @Field(() => SortOrder, {nullable:true})
    id?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    createdAt?: `${SortOrder}`;

    @Field(() => SortOrder, {nullable:true})
    email?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    firstname?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    lastname?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    middlename?: SortOrderInput;

    @Field(() => SortOrder, {nullable:true})
    password?: `${SortOrder}`;

    @Field(() => SortOrderInput, {nullable:true})
    telephone?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    tg?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    roleId?: SortOrderInput;

    @Field(() => SortOrderInput, {nullable:true})
    avatarId?: SortOrderInput;

    @Field(() => RoleOrderByWithRelationInput, {nullable:true})
    role?: RoleOrderByWithRelationInput;

    @Field(() => FileOrderByWithRelationInput, {nullable:true})
    avatar?: FileOrderByWithRelationInput;

    @Field(() => HouseOrderByRelationAggregateInput, {nullable:true})
    houses?: HouseOrderByRelationAggregateInput;

    @Field(() => AppealsOrderByRelationAggregateInput, {nullable:true})
    appealsAsClient?: AppealsOrderByRelationAggregateInput;

    @Field(() => AppealsOrderByRelationAggregateInput, {nullable:true})
    appealsAsRealtor?: AppealsOrderByRelationAggregateInput;
}
