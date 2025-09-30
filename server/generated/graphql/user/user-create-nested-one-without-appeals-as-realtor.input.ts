import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateWithoutAppealsAsRealtorInput } from './user-create-without-appeals-as-realtor.input';
import { Type } from 'class-transformer';
import { UserCreateOrConnectWithoutAppealsAsRealtorInput } from './user-create-or-connect-without-appeals-as-realtor.input';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';

@InputType()
export class UserCreateNestedOneWithoutAppealsAsRealtorInput {

    @Field(() => UserCreateWithoutAppealsAsRealtorInput, {nullable:true})
    @Type(() => UserCreateWithoutAppealsAsRealtorInput)
    create?: UserCreateWithoutAppealsAsRealtorInput;

    @Field(() => UserCreateOrConnectWithoutAppealsAsRealtorInput, {nullable:true})
    @Type(() => UserCreateOrConnectWithoutAppealsAsRealtorInput)
    connectOrCreate?: UserCreateOrConnectWithoutAppealsAsRealtorInput;

    @Field(() => UserWhereUniqueInput, {nullable:true})
    @Type(() => UserWhereUniqueInput)
    connect?: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'avatarId'>;
}
