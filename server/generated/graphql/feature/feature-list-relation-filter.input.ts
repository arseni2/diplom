import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeatureWhereInput } from './feature-where.input';

@InputType()
export class FeatureListRelationFilter {

    @Field(() => FeatureWhereInput, {nullable:true})
    every?: FeatureWhereInput;

    @Field(() => FeatureWhereInput, {nullable:true})
    some?: FeatureWhereInput;

    @Field(() => FeatureWhereInput, {nullable:true})
    none?: FeatureWhereInput;
}
