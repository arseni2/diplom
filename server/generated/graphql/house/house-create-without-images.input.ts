import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserCreateNestedOneWithoutHousesInput } from '../user/user-create-nested-one-without-houses.input';
import { FeatureCreateNestedManyWithoutHousesInput } from '../feature/feature-create-nested-many-without-houses.input';
import { AppealsCreateNestedOneWithoutHouseInput } from '../appeals/appeals-create-nested-one-without-house.input';

@InputType()
export class HouseCreateWithoutImagesInput {

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

    @Field(() => UserCreateNestedOneWithoutHousesInput, {nullable:false})
    realtor!: UserCreateNestedOneWithoutHousesInput;

    @Field(() => FeatureCreateNestedManyWithoutHousesInput, {nullable:true})
    features?: FeatureCreateNestedManyWithoutHousesInput;

    @Field(() => AppealsCreateNestedOneWithoutHouseInput, {nullable:true})
    appeal?: AppealsCreateNestedOneWithoutHouseInput;
}
