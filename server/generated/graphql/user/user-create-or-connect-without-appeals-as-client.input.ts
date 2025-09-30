import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAppealsAsClientInput } from './user-create-without-appeals-as-client.input';

@InputType()
export class UserCreateOrConnectWithoutAppealsAsClientInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'avatarId'>;

    @Field(() => UserCreateWithoutAppealsAsClientInput, {nullable:false})
    @Type(() => UserCreateWithoutAppealsAsClientInput)
    create!: UserCreateWithoutAppealsAsClientInput;
}
