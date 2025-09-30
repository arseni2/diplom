import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseCreateWithoutFeaturesInput } from './house-create-without-features.input';
import { Type } from 'class-transformer';
import { HouseCreateOrConnectWithoutFeaturesInput } from './house-create-or-connect-without-features.input';
import { HouseUpsertWithoutFeaturesInput } from './house-upsert-without-features.input';
import { HouseWhereInput } from './house-where.input';
import { Prisma } from '@prisma/client';
import { HouseWhereUniqueInput } from './house-where-unique.input';
import { HouseUpdateToOneWithWhereWithoutFeaturesInput } from './house-update-to-one-with-where-without-features.input';

@InputType()
export class HouseUpdateOneWithoutFeaturesNestedInput {

    @Field(() => HouseCreateWithoutFeaturesInput, {nullable:true})
    @Type(() => HouseCreateWithoutFeaturesInput)
    create?: HouseCreateWithoutFeaturesInput;

    @Field(() => HouseCreateOrConnectWithoutFeaturesInput, {nullable:true})
    @Type(() => HouseCreateOrConnectWithoutFeaturesInput)
    connectOrCreate?: HouseCreateOrConnectWithoutFeaturesInput;

    @Field(() => HouseUpsertWithoutFeaturesInput, {nullable:true})
    @Type(() => HouseUpsertWithoutFeaturesInput)
    upsert?: HouseUpsertWithoutFeaturesInput;

    @Field(() => HouseWhereInput, {nullable:true})
    @Type(() => HouseWhereInput)
    disconnect?: HouseWhereInput;

    @Field(() => HouseWhereInput, {nullable:true})
    @Type(() => HouseWhereInput)
    delete?: HouseWhereInput;

    @Field(() => HouseWhereUniqueInput, {nullable:true})
    @Type(() => HouseWhereUniqueInput)
    connect?: Prisma.AtLeast<HouseWhereUniqueInput, 'id'>;

    @Field(() => HouseUpdateToOneWithWhereWithoutFeaturesInput, {nullable:true})
    @Type(() => HouseUpdateToOneWithWhereWithoutFeaturesInput)
    update?: HouseUpdateToOneWithWhereWithoutFeaturesInput;
}
