import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseUpdateWithoutImagesInput } from './house-update-without-images.input';
import { Type } from 'class-transformer';
import { HouseCreateWithoutImagesInput } from './house-create-without-images.input';
import { HouseWhereInput } from './house-where.input';

@InputType()
export class HouseUpsertWithoutImagesInput {

    @Field(() => HouseUpdateWithoutImagesInput, {nullable:false})
    @Type(() => HouseUpdateWithoutImagesInput)
    update!: HouseUpdateWithoutImagesInput;

    @Field(() => HouseCreateWithoutImagesInput, {nullable:false})
    @Type(() => HouseCreateWithoutImagesInput)
    create!: HouseCreateWithoutImagesInput;

    @Field(() => HouseWhereInput, {nullable:true})
    @Type(() => HouseWhereInput)
    where?: HouseWhereInput;
}
