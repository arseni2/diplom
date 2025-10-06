import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseCreateWithoutFeaturesInput } from './house-create-without-features.input';
import { Type } from 'class-transformer';
import { HouseCreateOrConnectWithoutFeaturesInput } from './house-create-or-connect-without-features.input';
import { Prisma } from '@prisma/client';
import { HouseWhereUniqueInput } from './house-where-unique.input';

@InputType()
export class HouseUncheckedCreateNestedManyWithoutFeaturesInput {

    @Field(() => [HouseCreateWithoutFeaturesInput], {nullable:true})
    @Type(() => HouseCreateWithoutFeaturesInput)
    create?: Array<HouseCreateWithoutFeaturesInput>;

    @Field(() => [HouseCreateOrConnectWithoutFeaturesInput], {nullable:true})
    @Type(() => HouseCreateOrConnectWithoutFeaturesInput)
    connectOrCreate?: Array<HouseCreateOrConnectWithoutFeaturesInput>;

    @Field(() => [HouseWhereUniqueInput], {nullable:true})
    @Type(() => HouseWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<HouseWhereUniqueInput, 'id'>>;
}
