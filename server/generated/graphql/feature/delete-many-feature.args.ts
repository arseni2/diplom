import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeatureWhereInput } from './feature-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyFeatureArgs {

    @Field(() => FeatureWhereInput, {nullable:true})
    @Type(() => FeatureWhereInput)
    where?: FeatureWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
