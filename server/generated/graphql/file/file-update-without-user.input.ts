import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFieldUpdateOperationsInput } from '../prisma/string-field-update-operations.input';
import { NullableStringFieldUpdateOperationsInput } from '../prisma/nullable-string-field-update-operations.input';
import { NullableIntFieldUpdateOperationsInput } from '../prisma/nullable-int-field-update-operations.input';
import { HouseUpdateOneWithoutImagesNestedInput } from '../house/house-update-one-without-images-nested.input';

@InputType()
export class FileUpdateWithoutUserInput {

    @Field(() => StringFieldUpdateOperationsInput, {nullable:true})
    path?: StringFieldUpdateOperationsInput;

    @Field(() => NullableStringFieldUpdateOperationsInput, {nullable:true})
    name?: NullableStringFieldUpdateOperationsInput;

    @Field(() => NullableIntFieldUpdateOperationsInput, {nullable:true})
    size?: NullableIntFieldUpdateOperationsInput;

    @Field(() => HouseUpdateOneWithoutImagesNestedInput, {nullable:true})
    house?: HouseUpdateOneWithoutImagesNestedInput;
}
