import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseCreateNestedOneWithoutFeaturesInput } from '../house/house-create-nested-one-without-features.input';

@InputType()
export class FeatureCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    value!: string;

    @Field(() => HouseCreateNestedOneWithoutFeaturesInput, {nullable:true})
    house?: HouseCreateNestedOneWithoutFeaturesInput;
}
