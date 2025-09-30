import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HouseCount {

    @Field(() => Int, {nullable:false})
    images?: number;

    @Field(() => Int, {nullable:false})
    features?: number;
}
