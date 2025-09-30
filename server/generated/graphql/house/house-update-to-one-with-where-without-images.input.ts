import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseWhereInput } from './house-where.input';
import { Type } from 'class-transformer';
import { HouseUpdateWithoutImagesInput } from './house-update-without-images.input';

@InputType()
export class HouseUpdateToOneWithWhereWithoutImagesInput {

    @Field(() => HouseWhereInput, {nullable:true})
    @Type(() => HouseWhereInput)
    where?: HouseWhereInput;

    @Field(() => HouseUpdateWithoutImagesInput, {nullable:false})
    @Type(() => HouseUpdateWithoutImagesInput)
    data!: HouseUpdateWithoutImagesInput;
}
