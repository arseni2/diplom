import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { Type } from 'class-transformer';
import { UserUpdateWithoutAppealsAsRealtorInput } from './user-update-without-appeals-as-realtor.input';

@InputType()
export class UserUpdateToOneWithWhereWithoutAppealsAsRealtorInput {

    @Field(() => UserWhereInput, {nullable:true})
    @Type(() => UserWhereInput)
    where?: UserWhereInput;

    @Field(() => UserUpdateWithoutAppealsAsRealtorInput, {nullable:false})
    @Type(() => UserUpdateWithoutAppealsAsRealtorInput)
    data!: UserUpdateWithoutAppealsAsRealtorInput;
}
