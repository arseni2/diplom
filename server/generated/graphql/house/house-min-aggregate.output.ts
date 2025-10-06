import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class HouseMinAggregate {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:true})
    title?: string;

    @Field(() => String, {nullable:true})
    description?: string;

    @Field(() => String, {nullable:true})
    address?: string;

    @Field(() => String, {nullable:true})
    square?: string;

    @Field(() => String, {nullable:true})
    remont?: string;

    @Field(() => String, {nullable:true})
    floor?: string;

    @Field(() => String, {nullable:true})
    rooms?: string;

    @Field(() => String, {nullable:true})
    bio?: string;

    @Field(() => Int, {nullable:true})
    price?: number;

    @Field(() => Boolean, {nullable:true})
    isRent?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSell?: boolean;

    @Field(() => Int, {nullable:true})
    realtorId?: number;
}
