import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutHousesInput } from './user-create-without-houses.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutHousesInput } from './user-create-or-connect-without-houses.input';
import { UserUpsertWithoutHousesInput } from './user-upsert-without-houses.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutHousesInput } from './user-update-to-one-with-where-without-houses.input';

@InputType()
export class UserUpdateOneRequiredWithoutHousesNestedInput {

    @Field(() => UserCreateWithoutHousesInput, {nullable:true})
    @Type(() => UserCreateWithoutHousesInput)
    create?: UserCreateWithoutHousesInput;

    @Field(() => UserCreateOrConnectWithoutHousesInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutHousesInput)
    connectOrCreate?: UserCreateOrConnectWithoutHousesInput;

    @Field(() => UserUpsertWithoutHousesInput, {nullable:true})
    @Type(() => UserUpsertWithoutHousesInput)
    upsert?: UserUpsertWithoutHousesInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'avatarId'>;

    @Field(() => UserUpdateToOneWithWhereWithoutHousesInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutHousesInput)
    update?: UserUpdateToOneWithWhereWithoutHousesInput;
}
