import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { HouseUpdateOneWithoutAppealsNestedInput } from '../house/house-update-one-without-appeals-nested.input';
import { UserUpdateOneWithoutAppealsAsRealtorNestedInput } from '../user/user-update-one-without-appeals-as-realtor-nested.input';

@InputType()
export class AppealsUpdateWithoutClientInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    status?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    comment?: StringFieldUpdateOperationsInput;

    @Field(() => HouseUpdateOneWithoutAppealsNestedInput, {nullable:true})
    house?: HouseUpdateOneWithoutAppealsNestedInput;

    @Field(() => UserUpdateOneWithoutAppealsAsRealtorNestedInput, {nullable:true})
    realtor?: UserUpdateOneWithoutAppealsAsRealtorNestedInput;
}
