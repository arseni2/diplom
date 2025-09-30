import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { Role } from '../role/role.model';
import { File } from '../file/file.model';
import { House } from '../house/house.model';
import { Appeals } from '../appeals/appeals.model';
import { UserCount } from './user-count.output';

@ObjectType()
export class User {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:false})
    email!: string;

    @Field(() => String, {nullable:true})
    firstname!: string | null;

    @Field(() => String, {nullable:true})
    lastname!: string | null;

    @Field(() => String, {nullable:true})
    middlename!: string | null;

    @Field(() => String, {nullable:false})
    password!: string;

    @Field(() => String, {nullable:true})
    telephone!: string | null;

    @Field(() => String, {nullable:true})
    tg!: string | null;

    @Field(() => Int, {defaultValue:1,nullable:true})
    roleId!: number | null;

    @Field(() => Int, {nullable:true})
    avatarId!: number | null;

    @Field(() => Role, {nullable:true})
    role?: Role | null;

    @Field(() => File, {nullable:true})
    avatar?: File | null;

    @Field(() => [House], {nullable:true})
    houses?: Array<House>;

    @Field(() => [Appeals], {nullable:true})
    appealsAsClient?: Array<Appeals>;

    @Field(() => [Appeals], {nullable:true})
    appealsAsRealtor?: Array<Appeals>;

    @Field(() => UserCount, {nullable:false})
    _count?: UserCount;
}
