import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseCreateNestedOneWithoutAppealsInput } from '../house/house-create-nested-one-without-appeals.input';
import { UserCreateNestedOneWithoutAppealsAsClientInput } from '../user/user-create-nested-one-without-appeals-as-client.input';

@InputType()
export class AppealsCreateWithoutRealtorInput {

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
}
