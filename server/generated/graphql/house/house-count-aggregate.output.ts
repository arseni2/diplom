import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HouseCountAggregate {

    @Field(() => Int, {nullable:false})
    id!: number;

    @Field(() => Int, {nullable:false})
    createdAt!: number;

    @Field(() => Int, {nullable:false})
    title!: number;

    @Field(() => Int, {nullable:false})
    description!: number;

    @Field(() => Int, {nullable:false})
    address!: number;

    @Field(() => Int, {nullable:false})
    square!: number;

    @Field(() => Int, {nullable:false})
    remont!: number;

    @Field(() => Int, {nullable:false})
    floor!: number;

    @Field(() => Int, {nullable:false})
    rooms!: number;

    @Field(() => Int, {nullable:false})
    bio!: number;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Int, {nullable:false})
    isRent!: number;

    @Field(() => Int, {nullable:false})
    isSell!: number;

    @Field(() => Int, {nullable:false})
    realtorId!: number;

    @Field(() => Int, {nullable:false})
    _all!: number;
}
