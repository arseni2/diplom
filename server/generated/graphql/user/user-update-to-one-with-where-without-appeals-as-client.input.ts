import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutAppealsAsClientInput } from './user-update-without-appeals-as-client.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutAppealsAsClientInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutAppealsAsClientInput, {nullable:false})
    @Type(() => UserUpdateWithoutAppealsAsClientInput)
    data!: UserUpdateWithoutAppealsAsClientInput;
}
