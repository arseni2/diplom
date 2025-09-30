import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeatureScalarWhereInput } from './feature-scalar-where.input';
import { Type } from 'class-transformer';
import { FeatureUpdateManyMutationInput } from './feature-update-many-mutation.input';

@InputType()
export class FeatureUpdateManyWithWhereWithoutHouseInput {

    @Field(() => FeatureScalarWhereInput, {nullable:false})
    @Type(() => FeatureScalarWhereInput)
    where!: FeatureScalarWhereInput;

    @Field(() => FeatureUpdateManyMutationInput, {nullable:false})
    @Type(() => FeatureUpdateManyMutationInput)
    data!: FeatureUpdateManyMutationInput;
}
