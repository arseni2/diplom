import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutAppealsAsClientInput } from '../user/user-create-nested-one-without-appeals-as-client.input';
import { UserCreateNestedOneWithoutAppealsAsRealtorInput } from '../user/user-create-nested-one-without-appeals-as-realtor.input';

@InputType()
export class AppealsCreateWithoutHouseInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => UserCreateNestedOneWithoutAppealsAsClientInput, {nullable:true})
    client?: UserCreateNestedOneWithoutAppealsAsClientInput;

    @Field(() => UserCreateNestedOneWithoutAppealsAsRealtorInput, {nullable:true})
    realtor?: UserCreateNestedOneWithoutAppealsAsRealtorInput;
}
