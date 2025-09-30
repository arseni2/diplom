import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { AppealsUncheckedCreateNestedManyWithoutClientInput } from '../appeals/appeals-unchecked-create-nested-many-without-client.input';
import { AppealsUncheckedCreateNestedManyWithoutRealtorInput } from '../appeals/appeals-unchecked-create-nested-many-without-realtor.input';

@InputType()
export class UserUncheckedCreateWithoutHousesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

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

    @Field(() => Int, {nullable:true})
    roleId?: number;

    @Field(() => Int, {nullable:true})
    avatarId?: number;

    @Field(() => AppealsUncheckedCreateNestedManyWithoutClientInput, {nullable:true})
    appealsAsClient?: AppealsUncheckedCreateNestedManyWithoutClientInput;

    @Field(() => AppealsUncheckedCreateNestedManyWithoutRealtorInput, {nullable:true})
    appealsAsRealtor?: AppealsUncheckedCreateNestedManyWithoutRealtorInput;
}
