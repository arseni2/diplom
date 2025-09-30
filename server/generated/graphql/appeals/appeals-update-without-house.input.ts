import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { UserUpdateOneWithoutAppealsAsClientNestedInput } from '../user/user-update-one-without-appeals-as-client-nested.input';
import { UserUpdateOneWithoutAppealsAsRealtorNestedInput } from '../user/user-update-one-without-appeals-as-realtor-nested.input';

@InputType()
export class AppealsUpdateWithoutHouseInput {

    @Field(() => DateTimeFieldUpdateOperationsInput, {nullable:true})
    createdAt?: DateTimeFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    status?: StringFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    comment?: StringFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutAppealsAsClientNestedInput, {nullable:true})
    client?: UserUpdateOneWithoutAppealsAsClientNestedInput;

    @Field(() => UserUpdateOneWithoutAppealsAsRealtorNestedInput, {nullable:true})
    realtor?: UserUpdateOneWithoutAppealsAsRealtorNestedInput;
}
