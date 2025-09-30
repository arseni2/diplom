import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutHousesInput } from './user-update-without-houses.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutHousesInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutHousesInput, {nullable:false})
    @Type(() => UserUpdateWithoutHousesInput)
    data!: UserUpdateWithoutHousesInput;
}
