import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutHousesInput } from './user-update-without-houses.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutHousesInput } from './user-create-without-houses.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutHousesInput {

    @Field(() => UserUpdateWithoutHousesInput, {nullable:false})
    @Type(() => UserUpdateWithoutHousesInput)
    update!: UserUpdateWithoutHousesInput;

    @Field(() => UserCreateWithoutHousesInput, {nullable:false})
    @Type(() => UserCreateWithoutHousesInput)
    create!: UserCreateWithoutHousesInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
