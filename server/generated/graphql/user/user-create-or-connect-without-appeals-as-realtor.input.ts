import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { UserWhereUniqueInput } from './user-where-unique.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAppealsAsRealtorInput } from './user-create-without-appeals-as-realtor.input';

@InputType()
export class UserCreateOrConnectWithoutAppealsAsRealtorInput {

    @Field(() => UserWhereUniqueInput, {nullable:false})
    @Type(() => UserWhereUniqueInput)
    where!: Prisma.AtLeast<UserWhereUniqueInput, 'id' | 'email' | 'avatarId'>;

    @Field(() => UserCreateWithoutAppealsAsRealtorInput, {nullable:false})
    @Type(() => UserCreateWithoutAppealsAsRealtorInput)
    create!: UserCreateWithoutAppealsAsRealtorInput;
}
