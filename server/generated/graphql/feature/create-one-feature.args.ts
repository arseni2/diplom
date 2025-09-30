import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeatureCreateInput } from './feature-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneFeatureArgs {

    @Field(() => FeatureCreateInput, {nullable:false})
    @Type(() => FeatureCreateInput)
    data!: FeatureCreateInput;
}
