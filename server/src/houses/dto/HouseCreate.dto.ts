import {Field, InputType} from "@nestjs/graphql";

@InputType()
export class HouseCreateDto {
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

    @Field(() => String, {nullable:false})
    bio!: string;

    @Field(() => String, {nullable:false})
    price!: string;

    @Field(() => Boolean, {nullable:true})
    isRent?: boolean;

    @Field(() => Boolean, {nullable:true})
    isSell?: boolean;

    // @Field(() => FileCreateNestedManyWithoutHouseInput, {nullable:true})
    // images?: FileCreateNestedManyWithoutHouseInput;
    //
    // @Field(() => FeatureCreateNestedManyWithoutHouseInput, {nullable:true})
    // features?: FeatureCreateNestedManyWithoutHouseInput;
}