import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { UserUpdateOneWithoutAvatarNestedInput } from '../user/user-update-one-without-avatar-nested.input';

@InputType()
export class FileUpdateWithoutHouseInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    path?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    size?: NullableIntFieldUpdateOperationsInput;

    @Field(() => UserUpdateOneWithoutAvatarNestedInput, {nullable:true})
    user?: UserUpdateOneWithoutAvatarNestedInput;
}
