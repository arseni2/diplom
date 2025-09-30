import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAvatarInput } from './user-create-without-avatar.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAvatarInput } from './user-create-or-connect-without-avatar.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserUncheckedCreateNestedOneWithoutAvatarInput {

    @Field(() => UserCreateWithoutAvatarInput, {nullable:true})
    @Type(() => UserCreateWithoutAvatarInput)
    create?: UserCreateWithoutAvatarInput;

    @Field(() => UserCreateOrConnectWithoutAvatarInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAvatarInput)
    connectOrCreate?: UserCreateOrConnectWithoutAvatarInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'avatarId'>;
}
