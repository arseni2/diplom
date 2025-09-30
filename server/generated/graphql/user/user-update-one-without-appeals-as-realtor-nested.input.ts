import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAppealsAsRealtorInput } from './user-create-without-appeals-as-realtor.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAppealsAsRealtorInput } from './user-create-or-connect-without-appeals-as-realtor.input';
import { UserUpsertWithoutAppealsAsRealtorInput } from './user-upsert-without-appeals-as-realtor.input';
import { UserWhereInput } from './user-where.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { UserUpdateToOneWithWhereWithoutAppealsAsRealtorInput } from './user-update-to-one-with-where-without-appeals-as-realtor.input';

@InputType()
export class UserUpdateOneWithoutAppealsAsRealtorNestedInput {

    @Field(() => UserCreateWithoutAppealsAsRealtorInput, {nullable:true})
    @Type(() => UserCreateWithoutAppealsAsRealtorInput)
    create?: UserCreateWithoutAppealsAsRealtorInput;

    @Field(() => UserCreateOrConnectWithoutAppealsAsRealtorInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAppealsAsRealtorInput)
    connectOrCreate?: UserCreateOrConnectWithoutAppealsAsRealtorInput;

    @Field(() => UserUpsertWithoutAppealsAsRealtorInput, {nullable:true})
    @Type(() => UserUpsertWithoutAppealsAsRealtorInput)
    upsert?: UserUpsertWithoutAppealsAsRealtorInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    disconnect?: UserWhereInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    delete?: UserWhereInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'avatarId'>;

    @Field(() => UserUpdateToOneWithWhereWithoutAppealsAsRealtorInput, {nullable:true})
    @Type(() => UserUpdateToOneWithWhereWithoutAppealsAsRealtorInput)
    update?: UserUpdateToOneWithWhereWithoutAppealsAsRealtorInput;
}
