import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeatureCreateManyHouseInput } from './feature-create-many-house.input';
import { Type } from 'class-transformer';

@InputType()
export class FeatureCreateManyHouseInputEnvelope {

    @Field(() => [FeatureCreateManyHouseInput], {nullable:false})
    @Type(() => FeatureCreateManyHouseInput)
    data!: Array<FeatureCreateManyHouseInput>;
}
