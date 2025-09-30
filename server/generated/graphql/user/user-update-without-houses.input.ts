import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { DateTimeFieldUpdateOperationsInput } from '../prisma/date-time-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { RoleUpdateOneWithoutUsersNestedInput } from '../role/role-update-one-without-users-nested.input';
import { FileUpdateOneWithoutUserNestedInput } from '../file/file-update-one-without-user-nested.input';
import { AppealsUpdateManyWithoutClientNestedInput } from '../appeals/appeals-update-many-without-client-nested.input';
import { AppealsUpdateManyWithoutRealtorNestedInput } from '../appeals/appeals-update-many-without-realtor-nested.input';

@InputType()
export class UserUpdateWithoutHousesInput {

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

    @Field(() => RoleUpdateOneWithoutUsersNestedInput, {nullable:true})
    role?: RoleUpdateOneWithoutUsersNestedInput;

    @Field(() => FileUpdateOneWithoutUserNestedInput, {nullable:true})
    avatar?: FileUpdateOneWithoutUserNestedInput;

    @Field(() => AppealsUpdateManyWithoutClientNestedInput, {nullable:true})
    appealsAsClient?: AppealsUpdateManyWithoutClientNestedInput;

    @Field(() => AppealsUpdateManyWithoutRealtorNestedInput, {nullable:true})
    appealsAsRealtor?: AppealsUpdateManyWithoutRealtorNestedInput;
}
