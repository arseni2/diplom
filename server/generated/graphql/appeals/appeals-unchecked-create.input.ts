import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@InputType()
export class AppealsUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => Int, {nullable:true})
    houseId?: number;

    @Field(() => Int, {nullable:true})
    clientId?: number;

    @Field(() => Int, {nullable:true})
    realtorId?: number;
}
