import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HouseUpdateOneWithoutAppealNestedInput } from '../house/house-update-one-without-appeal-nested.input';
import { UserUpdateOneWithoutAppealsAsRealtorNestedInput } from '../user/user-update-one-without-appeals-as-realtor-nested.input';

@InputType()
export class AppealsUpdateWithoutClientInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    status?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    comment?: StringFieldUpdateOperationsInput;

    @Field(() => HouseUpdateOneWithoutAppealNestedInput, {nullable:true})
    house?: HouseUpdateOneWithoutAppealNestedInput;

    @Field(() => UserUpdateOneWithoutAppealsAsRealtorNestedInput, {nullable:true})
    realtor?: UserUpdateOneWithoutAppealsAsRealtorNestedInput;
}
