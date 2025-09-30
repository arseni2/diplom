import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class AppealsMaxAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    status?: string;

    @Field(() => String, {nullable:true})
    comment?: string;

    @Field(() => Int, {nullable:true})
    houseId?: number;

    @Field(() => Int, {nullable:true})
    clientId?: number;

    @Field(() => Int, {nullable:true})
    realtorId?: number;
}
