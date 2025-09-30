import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseCreateWithoutFeaturesInput } from './house-create-without-features.input';
import { Type } from 'class-transformer';
import { HouseCreateOrConnectWithoutFeaturesInput } from './house-create-or-connect-without-features.input';
import { Prisma } from '@prisma/client';
import { HouseWhereUniqueInput } from './house-where-unique.input';

@InputType()
export class HouseCreateNestedOneWithoutFeaturesInput {

    @Field(() => HouseCreateWithoutFeaturesInput, {nullable:true})
    @Type(() => HouseCreateWithoutFeaturesInput)
    create?: HouseCreateWithoutFeaturesInput;

    @Field(() => HouseCreateOrConnectWithoutFeaturesInput, {nullable:true})
    @Type(() => HouseCreateOrConnectWithoutFeaturesInput)
    connectOrCreate?: HouseCreateOrConnectWithoutFeaturesInput;

    @Field(() => HouseWhereUniqueInput, {nullable:true})
    @Type(() => HouseWhereUniqueInput)
    connect?: Prisma.AtLeast<HouseWhereUniqueInput, 'id'>;
}
