import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAvatarInput } from './user-create-without-avatar.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAvatarInput } from './user-create-or-connect-without-avatar.input';
import { UserUpsertWithoutAvatarInput } from './user-upsert-without-avatar.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutAvatarInput } from './user-update-to-one-with-where-without-avatar.input';

@InputType()
export class UserUncheckedUpdateOneWithoutAvatarNestedInput {

    @Field(() => UserCreateWithoutAvatarInput, {nullable:true})
    @Type(() => UserCreateWithoutAvatarInput)
    create?: UserCreateWithoutAvatarInput;

    @Field(() => UserCreateOrConnectWithoutAvatarInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAvatarInput)
    connectOrCreate?: UserCreateOrConnectWithoutAvatarInput;

    @Field(() => UserUpsertWithoutAvatarInput, {nullable:true})
    @Type(() => UserUpsertWithoutAvatarInput)
    upsert?: UserUpsertWithoutAvatarInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'avatarId'>;

    @Field(() => UserUpdateToOneWithWhereWithoutAvatarInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutAvatarInput)
    update?: UserUpdateToOneWithWhereWithoutAvatarInput;
}
