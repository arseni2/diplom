import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutHousesInput } from '../user/user-create-nested-one-without-houses.input';
import { FileCreateNestedManyWithoutHouseInput } from '../file/file-create-nested-many-without-house.input';
import { FeatureCreateNestedManyWithoutHouseInput } from '../feature/feature-create-nested-many-without-house.input';

@InputType()
export class HouseCreateWithoutAppealInput {

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

    @Field(() => String, {nullable:false})
    price!: string;

    @Field(() => Boolean, {nullable:true})
    isRent?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSell?: boolean;

    @Field(() => UserCreateNestedOneWithoutHousesInput, {nullable:false})
    realtor!: UserCreateNestedOneWithoutHousesInput;

    @Field(() => FileCreateNestedManyWithoutHouseInput, {nullable:true})
    images?: FileCreateNestedManyWithoutHouseInput;

    @Field(() => FeatureCreateNestedManyWithoutHouseInput, {nullable:true})
    features?: FeatureCreateNestedManyWithoutHouseInput;
}
