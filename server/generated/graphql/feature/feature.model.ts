import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { ID } from '@nestjs/graphql';
import { House } from '../house/house.model';
import { FeatureCount } from './feature-count.output';

@ObjectType()
export class Feature {

    @Field(() => ID, {nullable:false})
    id!: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    value!: string;

    @Field(() => [House], {nullable:true})
    houses?: Array<House>;

    @Field(() => FeatureCount, {nullable:false})
    _count?: FeatureCount;
}
