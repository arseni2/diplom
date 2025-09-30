import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutAvatarInput } from './user-update-without-avatar.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutAvatarInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutAvatarInput, {nullable:false})
    @Type(() => UserUpdateWithoutAvatarInput)
    data!: UserUpdateWithoutAvatarInput;
}
