import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseWhereInput } from './house-where.input';
import { Type } from 'class-transformer';
import { HouseUpdateWithoutFeaturesInput } from './house-update-without-features.input';

@InputType()
export class HouseUpdateToOneWithWhereWithoutFeaturesInput {

    @Field(() => HouseWhereInput, {nullable:true})
    @Type(() => HouseWhereInput)
    where?: HouseWhereInput;

    @Field(() => HouseUpdateWithoutFeaturesInput, {nullable:false})
    @Type(() => HouseUpdateWithoutFeaturesInput)
    data!: HouseUpdateWithoutFeaturesInput;
}
