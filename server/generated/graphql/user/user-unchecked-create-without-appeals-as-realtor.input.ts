import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HouseUncheckedCreateNestedManyWithoutRealtorInput } from '../house/house-unchecked-create-nested-many-without-realtor.input';
import { AppealsUncheckedCreateNestedManyWithoutClientInput } from '../appeals/appeals-unchecked-create-nested-many-without-client.input';

@InputType()
export class UserUncheckedCreateWithoutAppealsAsRealtorInput {

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

    @Field(() => HouseUncheckedCreateNestedManyWithoutRealtorInput, {nullable:true})
    houses?: HouseUncheckedCreateNestedManyWithoutRealtorInput;

    @Field(() => AppealsUncheckedCreateNestedManyWithoutClientInput, {nullable:true})
    appealsAsClient?: AppealsUncheckedCreateNestedManyWithoutClientInput;
}
