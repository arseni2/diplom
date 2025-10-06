import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseCreateNestedManyWithoutFeaturesInput } from '../house/house-create-nested-many-without-features.input';

@InputType()
export class FeatureCreateInput {

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    value!: string;

    @Field(() => HouseCreateNestedManyWithoutFeaturesInput, {nullable:true})
    houses?: HouseCreateNestedManyWithoutFeaturesInput;
}
