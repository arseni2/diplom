import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAppealsAsClientInput } from './user-create-without-appeals-as-client.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAppealsAsClientInput } from './user-create-or-connect-without-appeals-as-client.input';
import { UserUpsertWithoutAppealsAsClientInput } from './user-upsert-without-appeals-as-client.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutAppealsAsClientInput } from './user-update-to-one-with-where-without-appeals-as-client.input';

@InputType()
export class UserUpdateOneWithoutAppealsAsClientNestedInput {

    @Field(() => UserCreateWithoutAppealsAsClientInput, {nullable:true})
    @Type(() => UserCreateWithoutAppealsAsClientInput)
    create?: UserCreateWithoutAppealsAsClientInput;

    @Field(() => UserCreateOrConnectWithoutAppealsAsClientInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAppealsAsClientInput)
    connectOrCreate?: UserCreateOrConnectWithoutAppealsAsClientInput;

    @Field(() => UserUpsertWithoutAppealsAsClientInput, {nullable:true})
    @Type(() => UserUpsertWithoutAppealsAsClientInput)
    upsert?: UserUpsertWithoutAppealsAsClientInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'avatarId'>;

    @Field(() => UserUpdateToOneWithWhereWithoutAppealsAsClientInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutAppealsAsClientInput)
    update?: UserUpdateToOneWithWhereWithoutAppealsAsClientInput;
}
