import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleCreateNestedOneWithoutUsersInput } from '../role/role-create-nested-one-without-users.input';
import { FileCreateNestedOneWithoutUserInput } from '../file/file-create-nested-one-without-user.input';
import { AppealsCreateNestedManyWithoutClientInput } from '../appeals/appeals-create-nested-many-without-client.input';
import { AppealsCreateNestedManyWithoutRealtorInput } from '../appeals/appeals-create-nested-many-without-realtor.input';

@InputType()
export class UserCreateWithoutHousesInput {

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    firstname?: string;

    @Field(() => String, {nullable:true})
    lastname?: string;

    @Field(() => String, {nullable:true})
    middlename?: string;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    telephone?: string;

    @Field(() => String, {nullable:true})
    tg?: string;

    @Field(() => RoleCreateNestedOneWithoutUsersInput, {nullable:true})
    role?: RoleCreateNestedOneWithoutUsersInput;

    @Field(() => FileCreateNestedOneWithoutUserInput, {nullable:true})
    avatar?: FileCreateNestedOneWithoutUserInput;

    @Field(() => AppealsCreateNestedManyWithoutClientInput, {nullable:true})
    appealsAsClient?: AppealsCreateNestedManyWithoutClientInput;

    @Field(() => AppealsCreateNestedManyWithoutRealtorInput, {nullable:true})
    appealsAsRealtor?: AppealsCreateNestedManyWithoutRealtorInput;
}
