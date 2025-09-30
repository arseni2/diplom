import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFieldUpdateOperationsInput } from '../prisma/int-field-update-operations.input';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { UserUncheckedUpdateOneWithoutAvatarNestedInput } from '../user/user-unchecked-update-one-without-avatar-nested.input';

@InputType()
export class FileUncheckedUpdateWithoutHouseInput {

    @Field(() => IntFieldUpdateOperationsInput, {nullable:true})
    id?: IntFieldUpdateOperationsInput;

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    path?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    size?: NullableIntFieldUpdateOperationsInput;

    @Field(() => UserUncheckedUpdateOneWithoutAvatarNestedInput, {nullable:true})
    user?: UserUncheckedUpdateOneWithoutAvatarNestedInput;
}
