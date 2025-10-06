import { Field } from '@nestjs/graphql';
import { ObjectType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';

@ObjectType()
export class FeatureCount {

    @Field(() => Int, {nullable:false})
    houses?: number;
}
