import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { BoolFieldUpdateOperationsInput } from '../prisma/bool-field-update-operations.input';
import { UserUpdateOneRequiredWithoutHousesNestedInput } from '../user/user-update-one-required-without-houses-nested.input';
import { FileUpdateManyWithoutHouseNestedInput } from '../file/file-update-many-without-house-nested.input';
import { FeatureUpdateManyWithoutHousesNestedInput } from '../feature/feature-update-many-without-houses-nested.input';

@InputType()
export class HouseUpdateWithoutAppealInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    title?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    description?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    address?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    square?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    remont?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    floor?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    rooms?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    bio?: StringFieldUpdateOperationsInput;

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    price?: IntFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isRent?: BoolFieldUpdateOperationsInput;

    @Field(() => BoolFieldUpdateOperationsInput, {nullable:true})
    isSell?: BoolFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneRequiredWithoutHousesNestedInput, {nullable:true})
    realtor?: UserUpdateOneRequiredWithoutHousesNestedInput;

    @Field(() => FileUpdateManyWithoutHouseNestedInput, {nullable:true})
    images?: FileUpdateManyWithoutHouseNestedInput;

    @Field(() => FeatureUpdateManyWithoutHousesNestedInput, {nullable:true})
    features?: FeatureUpdateManyWithoutHousesNestedInput;
}
