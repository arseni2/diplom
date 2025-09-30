import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { RoleWhereInput } from './role-where.input';
import { Type } from 'class-transformer';
import { RoleUpdateWithoutUsersInput } from './role-update-without-users.input';

@InputType()
export class RoleUpdateToOneWithWhereWithoutUsersInput {

    @Field(() => RoleWhereInput, {nullable:true})
    @Type(() => RoleWhereInput)
    where?: RoleWhereInput;

    @Field(() => RoleUpdateWithoutUsersInput, {nullable:false})
    @Type(() => RoleUpdateWithoutUsersInput)
    data!: RoleUpdateWithoutUsersInput;
}
