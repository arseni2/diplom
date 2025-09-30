import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { House } from '../house/house.model';
import { User } from '../user/user.model';

@ObjectType()
export class Appeals {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {defaultValue:'Новая',nullable:false})
    status!: string;

    @Field(() => String, {nullable:false})
    comment!: string;

    @Field(() => Int, {nullable:true})
    houseId!: number | null;

    @Field(() => Int, {nullable:true})
    clientId!: number | null;

    @Field(() => Int, {nullable:true})
    realtorId!: number | null;

    @Field(() => House, {nullable:true})
    house?: House | null;

    @Field(() => User, {nullable:true})
    client?: User | null;

    @Field(() => User, {nullable:true})
    realtor?: User | null;
}
