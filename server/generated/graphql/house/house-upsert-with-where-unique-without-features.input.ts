import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HouseWhereUniqueInput } from './house-where-unique.input';
import { Type } from 'class-transformer';
import { HouseUpdateWithoutFeaturesInput } from './house-update-without-features.input';
import { HouseCreateWithoutFeaturesInput } from './house-create-without-features.input';

@InputType()
export class HouseUpsertWithWhereUniqueWithoutFeaturesInput {

    @Field(() => HouseWhereUniqueInput, {nullable:false})
    @Type(() => HouseWhereUniqueInput)
    where!: Prisma.AtLeast<HouseWhereUniqueInput, 'id'>;

    @Field(() => HouseUpdateWithoutFeaturesInput, {nullable:false})
    @Type(() => HouseUpdateWithoutFeaturesInput)
    update!: HouseUpdateWithoutFeaturesInput;

    @Field(() => HouseCreateWithoutFeaturesInput, {nullable:false})
    @Type(() => HouseCreateWithoutFeaturesInput)
    create!: HouseCreateWithoutFeaturesInput;
}
