import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAppealsAsClientInput } from './user-create-without-appeals-as-client.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAppealsAsClientInput } from './user-create-or-connect-without-appeals-as-client.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAppealsAsClientInput {

    @Field(() => UserCreateWithoutAppealsAsClientInput, {nullable:true})
    @Type(() => UserCreateWithoutAppealsAsClientInput)
    create?: UserCreateWithoutAppealsAsClientInput;

    @Field(() => UserCreateOrConnectWithoutAppealsAsClientInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAppealsAsClientInput)
    connectOrCreate?: UserCreateOrConnectWithoutAppealsAsClientInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'avatarId'>;
}
