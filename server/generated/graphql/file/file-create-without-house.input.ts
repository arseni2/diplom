import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutAvatarInput } from '../user/user-create-nested-one-without-avatar.input';

@InputType()
export class FileCreateWithoutHouseInput {

    @Field(() => String, {nullable:false})
    path!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Int, {nullable:true})
    size?: number;

    @Field(() => UserCreateNestedOneWithoutAvatarInput, {nullable:true})
    user?: UserCreateNestedOneWithoutAvatarInput;
}
