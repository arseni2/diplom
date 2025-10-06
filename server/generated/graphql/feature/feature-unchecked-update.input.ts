import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HouseUncheckedUpdateManyWithoutFeaturesNestedInput } from '../house/house-unchecked-update-many-without-features-nested.input';

@InputType()
export class FeatureUncheckedUpdateInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    value?: StringFieldUpdateOperationsInput;

    @Field(() => HouseUncheckedUpdateManyWithoutFeaturesNestedInput, {nullable:true})
    houses?: HouseUncheckedUpdateManyWithoutFeaturesNestedInput;
}
