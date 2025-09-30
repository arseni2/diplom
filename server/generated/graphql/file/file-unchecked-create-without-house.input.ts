import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserUncheckedCreateNestedOneWithoutAvatarInput } from '../user/user-unchecked-create-nested-one-without-avatar.input';

@InputType()
export class FileUncheckedCreateWithoutHouseInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    path!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Int, {nullable:true})
    size?: number;

    @Field(() => UserUncheckedCreateNestedOneWithoutAvatarInput, {nullable:true})
    user?: UserUncheckedCreateNestedOneWithoutAvatarInput;
}
