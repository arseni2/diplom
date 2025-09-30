import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { User } from '../user/user.model';
import { File } from '../file/file.model';
import { Feature } from '../feature/feature.model';
import { Appeals } from '../appeals/appeals.model';
import { HouseCount } from './house-count.output';

@ObjectType()
export class House {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => Date, {nullable:false})
    createdAt!: Date;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    square!: string;

    @Field(() => String, {nullable:false})
    remont!: string;

    @Field(() => String, {nullable:true})
    floor!: string | null;

    @Field(() => String, {nullable:true})
    rooms!: string | null;

    @Field(() => String, {nullable:false})
    bio!: string;

    @Field(() => String, {nullable:false})
    price!: string;

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    isRent!: boolean;

    @Field(() => Boolean, {defaultValue:true,nullable:false})
    isSell!: boolean;

    @Field(() => Int, {nullable:false})
    realtorId!: number;

    @Field(() => User, {nullable:false})
    realtor?: User;

    @Field(() => [File], {nullable:true})
    images?: Array<File>;

    @Field(() => [Feature], {nullable:true})
    features?: Array<Feature>;

    @Field(() => Appeals, {nullable:true})
    appeal?: Appeals | null;

    @Field(() => HouseCount, {nullable:false})
    _count?: HouseCount;
}
