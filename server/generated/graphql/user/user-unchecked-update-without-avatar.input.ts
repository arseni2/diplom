import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { HouseUncheckedUpdateManyWithoutRealtorNestedInput } from '../house/house-unchecked-update-many-without-realtor-nested.input';
import { AppealsUncheckedUpdateManyWithoutClientNestedInput } from '../appeals/appeals-unchecked-update-many-without-client-nested.input';
import { AppealsUncheckedUpdateManyWithoutRealtorNestedInput } from '../appeals/appeals-unchecked-update-many-without-realtor-nested.input';

@InputType()
export class UserUncheckedUpdateWithoutAvatarInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    email?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    firstname?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    lastname?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    middlename?: NullableStringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    password?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    telephone?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    tg?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    roleId?: NullableIntFieldUpdateOperationsInput;

    @Field(() => HouseUncheckedUpdateManyWithoutRealtorNestedInput, {nullable:true})
    houses?: HouseUncheckedUpdateManyWithoutRealtorNestedInput;

    @Field(() => AppealsUncheckedUpdateManyWithoutClientNestedInput, {nullable:true})
    appealsAsClient?: AppealsUncheckedUpdateManyWithoutClientNestedInput;

    @Field(() => AppealsUncheckedUpdateManyWithoutRealtorNestedInput, {nullable:true})
    appealsAsRealtor?: AppealsUncheckedUpdateManyWithoutRealtorNestedInput;
}
