import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { House } from '../house/house.model';

@ObjectType()
export class Feature {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    value!: string;

    @Field(() => Int, {nullable:true})
    houseId!: number | null;

    @Field(() => House, {nullable:true})
    house?: House | null;
}
