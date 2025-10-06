import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { FileUncheckedCreateNestedManyWithoutHouseInput } from '../file/file-unchecked-create-nested-many-without-house.input';
import { AppealsUncheckedCreateNestedOneWithoutHouseInput } from '../appeals/appeals-unchecked-create-nested-one-without-house.input';

@InputType()
export class HouseUncheckedCreateWithoutFeaturesInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => Date, {nullable:true})
    createdAt?: Date | string;

    @Field(() => String, {nullable:false})
    title!: string;

    @Field(() => String, {nullable:false})
    description!: string;

    @Field(() => String, {nullable:false})
    address!: string;

    @Field(() => String, {nullable:false})
    square!: string;

    @Field(() => String, {nullable:false})
    remont!: string;

    @Field(() => String, {nullable:true})
    floor?: string;

    @Field(() => String, {nullable:true})
    rooms?: string;

    @Field(() => String, {nullable:false})
    bio!: string;

    @Field(() => Int, {nullable:false})
    price!: number;

    @Field(() => Boolean, {nullable:true})
    isRent?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSell?: boolean;

    @Field(() => Int, {nullable:false})
    realtorId!: number;

    @Field(() => FileUncheckedCreateNestedManyWithoutHouseInput, {nullable:true})
    images?: FileUncheckedCreateNestedManyWithoutHouseInput;

    @Field(() => AppealsUncheckedCreateNestedOneWithoutHouseInput, {nullable:true})
    appeal?: AppealsUncheckedCreateNestedOneWithoutHouseInput;
}
