import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HouseUncheckedCreateNestedManyWithoutFeaturesInput } from '../house/house-unchecked-create-nested-many-without-features.input';

@InputType()
export class FeatureUncheckedCreateInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    value!: string;

    @Field(() => HouseUncheckedCreateNestedManyWithoutFeaturesInput, {nullable:true})
    houses?: HouseUncheckedCreateNestedManyWithoutFeaturesInput;
}
