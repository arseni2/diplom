import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { House } from '../house/house.model';
import { User } from '../user/user.model';

@ObjectType()
export class File {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    path!: string;

    @Field(() => String, {nullable:true})
    name!: string | null;

    @Field(() => Int, {nullable:true})
    size!: number | null;

    @Field(() => Int, {nullable:true})
    houseId!: number | null;

    @Field(() => House, {nullable:true})
    house?: House | null;

    @Field(() => User, {nullable:true})
    user?: User | null;
}
