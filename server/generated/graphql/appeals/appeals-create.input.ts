import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseCreateNestedOneWithoutAppealsInput } from '../house/house-create-nested-one-without-appeals.input';
import { UserCreateNestedOneWithoutAppealsAsClientInput } from '../user/user-create-nested-one-without-appeals-as-client.input';
import { UserCreateNestedOneWithoutAppealsAsRealtorInput } from '../user/user-create-nested-one-without-appeals-as-realtor.input';

@InputType()
export class AppealsCreateInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => HouseCreateNestedOneWithoutAppealsInput, {nullable:true})
    house?: HouseCreateNestedOneWithoutAppealsInput;

    @Field(() => UserCreateNestedOneWithoutAppealsAsClientInput, {nullable:true})
    client?: UserCreateNestedOneWithoutAppealsAsClientInput;

    @Field(() => UserCreateNestedOneWithoutAppealsAsRealtorInput, {nullable:true})
    realtor?: UserCreateNestedOneWithoutAppealsAsRealtorInput;
}
