import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { HouseCreateNestedOneWithoutImagesInput } from '../house/house-create-nested-one-without-images.input';

@InputType()
export class FileCreateWithoutUserInput {

    @Field(() => String, {nullable:false})
    path!: string;

    @Field(() => String, {nullable:true})
    name?: string;

    @Field(() => Int, {nullable:true})
    size?: number;

    @Field(() => HouseCreateNestedOneWithoutImagesInput, {nullable:true})
    house?: HouseCreateNestedOneWithoutImagesInput;
}
