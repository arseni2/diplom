import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Float } from '@nestjs/graphql';

@ObjectType()
export class AppealsAvgAggregate {

    @Field(() => Float, {nullable:true})
    id?: number;

    @Field(() => Float, {nullable:true})
    houseId?: number;

    @Field(() => Float, {nullable:true})
    clientId?: number;

    @Field(() => Float, {nullable:true})
    realtorId?: number;
}
