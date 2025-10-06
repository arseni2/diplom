import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HouseUpdateManyWithoutFeaturesNestedInput } from '../house/house-update-many-without-features-nested.input';

@InputType()
export class FeatureUpdateInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    value?: StringFieldUpdateOperationsInput;

    @Field(() => HouseUpdateManyWithoutFeaturesNestedInput, {nullable:true})
    houses?: HouseUpdateManyWithoutFeaturesNestedInput;
}
