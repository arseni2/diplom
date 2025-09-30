import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeatureUpdateManyMutationInput } from './feature-update-many-mutation.input';
import { Type } from 'class-transformer';
import { FeatureWhereInput } from './feature-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyFeatureArgs {

    @Field(() => FeatureUpdateManyMutationInput, {nullable:false})
    @Type(() => FeatureUpdateManyMutationInput)
    data!: FeatureUpdateManyMutationInput;

    @Field(() => FeatureWhereInput, {nullable:true})
    @Type(() => FeatureWhereInput)
    where?: FeatureWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
