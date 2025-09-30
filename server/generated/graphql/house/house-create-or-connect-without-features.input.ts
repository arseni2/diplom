import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HouseWhereUniqueInput } from './house-where-unique.input';
import { Type } from 'class-transformer';
import { HouseCreateWithoutFeaturesInput } from './house-create-without-features.input';

@InputType()
export class HouseCreateOrConnectWithoutFeaturesInput {

    @Field(() => HouseWhereUniqueInput, {nullable:false})
    @Type(() => HouseWhereUniqueInput)
    where!: Prisma.AtLeast<HouseWhereUniqueInput, 'id'>;

    @Field(() => HouseCreateWithoutFeaturesInput, {nullable:false})
    @Type(() => HouseCreateWithoutFeaturesInput)
    create!: HouseCreateWithoutFeaturesInput;
}
