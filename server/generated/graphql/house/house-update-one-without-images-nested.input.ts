import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseCreateWithoutImagesInput } from './house-create-without-images.input';
import { Type } from 'class-transformer';
import { HouseCreateOrConnectWithoutImagesInput } from './house-create-or-connect-without-images.input';
import { HouseUpsertWithoutImagesInput } from './house-upsert-without-images.input';
import { HouseWhereInput } from './house-where.input';
import { Prisma } from '@prisma/client';
import { HouseWhereUniqueInput } from './house-where-unique.input';
import { HouseUpdateToOneWithWhereWithoutImagesInput } from './house-update-to-one-with-where-without-images.input';

@InputType()
export class HouseUpdateOneWithoutImagesNestedInput {

    @Field(() => HouseCreateWithoutImagesInput, {nullable:true})
    @Type(() => HouseCreateWithoutImagesInput)
    create?: HouseCreateWithoutImagesInput;

    @Field(() => HouseCreateOrConnectWithoutImagesInput, {nullable:true})
    @Type(() => HouseCreateOrConnectWithoutImagesInput)
    connectOrCreate?: HouseCreateOrConnectWithoutImagesInput;

    @Field(() => HouseUpsertWithoutImagesInput, {nullable:true})
    @Type(() => HouseUpsertWithoutImagesInput)
    upsert?: HouseUpsertWithoutImagesInput;

    @Field(() => HouseWhereInput, {nullable:true})
    @Type(() => HouseWhereInput)
    disconnect?: HouseWhereInput;

    @Field(() => HouseWhereInput, {nullable:true})
    @Type(() => HouseWhereInput)
    delete?: HouseWhereInput;

    @Field(() => HouseWhereUniqueInput, {nullable:true})
    @Type(() => HouseWhereUniqueInput)
    connect?: Prisma.AtLeast<HouseWhereUniqueInput, 'id'>;

    @Field(() => HouseUpdateToOneWithWhereWithoutImagesInput, {nullable:true})
    @Type(() => HouseUpdateToOneWithWhereWithoutImagesInput)
    update?: HouseUpdateToOneWithWhereWithoutImagesInput;
}
