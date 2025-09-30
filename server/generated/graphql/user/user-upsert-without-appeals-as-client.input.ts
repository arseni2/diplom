import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserUpdateWithoutAppealsAsClientInput } from './user-update-without-appeals-as-client.input';
import { Type } from 'class-transformer';
import { UserCreateWithoutAppealsAsClientInput } from './user-create-without-appeals-as-client.input';
import { UserWhereInput } from './user-where.input';

@InputType()
export class UserUpsertWithoutAppealsAsClientInput {

    @Field(() => UserUpdateWithoutAppealsAsClientInput, {nullable:false})
    @Type(() => UserUpdateWithoutAppealsAsClientInput)
    update!: UserUpdateWithoutAppealsAsClientInput;

    @Field(() => UserCreateWithoutAppealsAsClientInput, {nullable:false})
    @Type(() => UserCreateWithoutAppealsAsClientInput)
    create!: UserCreateWithoutAppealsAsClientInput;

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;
}
