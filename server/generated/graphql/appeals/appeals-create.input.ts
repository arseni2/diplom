import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseCreateNestedOneWithoutAppealInput } from '../house/house-create-nested-one-without-appeal.input';
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

    @Field(() => HouseCreateNestedOneWithoutAppealInput, {nullable:true})
    house?: HouseCreateNestedOneWithoutAppealInput;

    @Field(() => UserCreateNestedOneWithoutAppealsAsClientInput, {nullable:true})
    client?: UserCreateNestedOneWithoutAppealsAsClientInput;

    @Field(() => UserCreateNestedOneWithoutAppealsAsRealtorInput, {nullable:true})
    realtor?: UserCreateNestedOneWithoutAppealsAsRealtorInput;
}
