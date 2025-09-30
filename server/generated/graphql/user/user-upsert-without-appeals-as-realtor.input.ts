import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAppealsAsRealtorInput } from './user-update-without-appeals-as-realtor.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAppealsAsRealtorInput } from './user-create-without-appeals-as-realtor.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutAppealsAsRealtorInput {

    @Field(() => UserUpdateWithoutAppealsAsRealtorInput, {nullable:false})
    @Type(() => UserUpdateWithoutAppealsAsRealtorInput)
    update!: UserUpdateWithoutAppealsAsRealtorInput;

    @Field(() => UserCreateWithoutAppealsAsRealtorInput, {nullable:false})
    @Type(() => UserCreateWithoutAppealsAsRealtorInput)
    create!: UserCreateWithoutAppealsAsRealtorInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
