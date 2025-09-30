import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateNestedOneWithoutUserInput } from '../file/file-create-nested-one-without-user.input';
import { HouseCreateNestedManyWithoutRealtorInput } from '../house/house-create-nested-many-without-realtor.input';
import { AppealsCreateNestedManyWithoutClientInput } from '../appeals/appeals-create-nested-many-without-client.input';
import { AppealsCreateNestedManyWithoutRealtorInput } from '../appeals/appeals-create-nested-many-without-realtor.input';

@InputType()
export class UserCreateWithoutRoleInput {

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

    @Field(() => FileCreateNestedOneWithoutUserInput, {nullable:true})
    avatar?: FileCreateNestedOneWithoutUserInput;

    @Field(() => HouseCreateNestedManyWithoutRealtorInput, {nullable:true})
    houses?: HouseCreateNestedManyWithoutRealtorInput;

    @Field(() => AppealsCreateNestedManyWithoutClientInput, {nullable:true})
    appealsAsClient?: AppealsCreateNestedManyWithoutClientInput;

    @Field(() => AppealsCreateNestedManyWithoutRealtorInput, {nullable:true})
    appealsAsRealtor?: AppealsCreateNestedManyWithoutRealtorInput;
}
