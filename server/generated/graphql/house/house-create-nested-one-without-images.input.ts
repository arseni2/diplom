import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseCreateWithoutImagesInput } from './house-create-without-images.input';
import { Type } from 'class-transformer';
import { HouseCreateOrConnectWithoutImagesInput } from './house-create-or-connect-without-images.input';
import { Prisma } from '@prisma/client';
import { HouseWhereUniqueInput } from './house-where-unique.input';

@InputType()
export class HouseCreateNestedOneWithoutImagesInput {

    @Field(() => HouseCreateWithoutImagesInput, {nullable:true})
    @Type(() => HouseCreateWithoutImagesInput)
    create?: HouseCreateWithoutImagesInput;

    @Field(() => HouseCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => HouseCreateOrConnectWithoutImagesInput)
    connectOrCreate?: HouseCreateOrConnectWithoutImagesInput;

    @Field(() => HouseWhereUniqueInput, {nullable:true})
    @Type(() => HouseWhereUniqueInput)
    connect?: Prisma.AtLeast<HouseWhereUniqueInput, 'id'>;
}
