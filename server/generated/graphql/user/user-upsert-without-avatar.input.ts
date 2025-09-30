import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAvatarInput } from './user-update-without-avatar.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAvatarInput } from './user-create-without-avatar.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutAvatarInput {

    @Field(() => UserUpdateWithoutAvatarInput, {nullable:false})
    @Type(() => UserUpdateWithoutAvatarInput)
    update!: UserUpdateWithoutAvatarInput;

    @Field(() => UserCreateWithoutAvatarInput, {nullable:false})
    @Type(() => UserCreateWithoutAvatarInput)
    create!: UserCreateWithoutAvatarInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
