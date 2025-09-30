import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutHousesInput } from './user-create-without-houses.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutHousesInput } from './user-create-or-connect-without-houses.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutHousesInput {

    @Field(() => UserCreateWithoutHousesInput, {nullable:true})
    @Type(() => UserCreateWithoutHousesInput)
    create?: UserCreateWithoutHousesInput;

    @Field(() => UserCreateOrConnectWithoutHousesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutHousesInput)
    connectOrCreate?: UserCreateOrConnectWithoutHousesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'avatarId'>;
}
