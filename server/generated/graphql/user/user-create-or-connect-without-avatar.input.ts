import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAvatarInput } from './user-create-without-avatar.input';

@InputType()
export class UserCreateOrConnectWithoutAvatarInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'avatarId'>;

    @Field(() => UserCreateWithoutAvatarInput, {nullable:false})
    @Type(() => UserCreateWithoutAvatarInput)
    create!: UserCreateWithoutAvatarInput;
}
