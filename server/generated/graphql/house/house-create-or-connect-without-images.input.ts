import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HouseWhereUniqueInput } from './house-where-unique.input';
import { Type } from 'class-transformer';
import { HouseCreateWithoutImagesInput } from './house-create-without-images.input';

@InputType()
export class HouseCreateOrConnectWithoutImagesInput {

    @Field(() => HouseWhereUniqueInput, {nullable:false})
    @Type(() => HouseWhereUniqueInput)
    where!: Prisma.AtLeast<HouseWhereUniqueInput, 'id'>;

    @Field(() => HouseCreateWithoutImagesInput, {nullable:false})
    @Type(() => HouseCreateWithoutImagesInput)
    create!: HouseCreateWithoutImagesInput;
}
