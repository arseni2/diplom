import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseUpdateWithoutFeaturesInput } from './house-update-without-features.input';
import { Type } from 'class-transformer';
import { HouseCreateWithoutFeaturesInput } from './house-create-without-features.input';
import { HouseWhereInput } from './house-where.input';

@InputType()
export class HouseUpsertWithoutFeaturesInput {

    @Field(() => HouseUpdateWithoutFeaturesInput, {nullable:false})
    @Type(() => HouseUpdateWithoutFeaturesInput)
    update!: HouseUpdateWithoutFeaturesInput;

    @Field(() => HouseCreateWithoutFeaturesInput, {nullable:false})
    @Type(() => HouseCreateWithoutFeaturesInput)
    create!: HouseCreateWithoutFeaturesInput;

    @Field(() => HouseWhereInput, {nullable:true})
    @Type(() => HouseWhereInput)
    where?: HouseWhereInput;
}
