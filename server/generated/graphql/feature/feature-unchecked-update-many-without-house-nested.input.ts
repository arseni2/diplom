import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeatureCreateWithoutHouseInput } from './feature-create-without-house.input';
import { Type } from 'class-transformer';
import { FeatureCreateOrConnectWithoutHouseInput } from './feature-create-or-connect-without-house.input';
import { FeatureUpsertWithWhereUniqueWithoutHouseInput } from './feature-upsert-with-where-unique-without-house.input';
import { FeatureCreateManyHouseInputEnvelope } from './feature-create-many-house-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeatureWhereUniqueInput } from './feature-where-unique.input';
import { FeatureUpdateWithWhereUniqueWithoutHouseInput } from './feature-update-with-where-unique-without-house.input';
import { FeatureUpdateManyWithWhereWithoutHouseInput } from './feature-update-many-with-where-without-house.input';
import { FeatureScalarWhereInput } from './feature-scalar-where.input';

@InputType()
export class FeatureUncheckedUpdateManyWithoutHouseNestedInput {

    @Field(() => [FeatureCreateWithoutHouseInput], {nullable:true})
    @Type(() => FeatureCreateWithoutHouseInput)
    create?: Array<FeatureCreateWithoutHouseInput>;

    @Field(() => [FeatureCreateOrConnectWithoutHouseInput], {nullable:true})
    @Type(() => FeatureCreateOrConnectWithoutHouseInput)
    connectOrCreate?: Array<FeatureCreateOrConnectWithoutHouseInput>;

    @Field(() => [FeatureUpsertWithWhereUniqueWithoutHouseInput], {nullable:true})
    @Type(() => FeatureUpsertWithWhereUniqueWithoutHouseInput)
    upsert?: Array<FeatureUpsertWithWhereUniqueWithoutHouseInput>;

    @Field(() => FeatureCreateManyHouseInputEnvelope, {nullable:true})
    @Type(() => FeatureCreateManyHouseInputEnvelope)
    createMany?: FeatureCreateManyHouseInputEnvelope;

    @Field(() => [FeatureWhereUniqueInput], {nullable:true})
    @Type(() => FeatureWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FeatureWhereUniqueInput, 'id'>>;

    @Field(() => [FeatureWhereUniqueInput], {nullable:true})
    @Type(() => FeatureWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FeatureWhereUniqueInput, 'id'>>;

    @Field(() => [FeatureWhereUniqueInput], {nullable:true})
    @Type(() => FeatureWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FeatureWhereUniqueInput, 'id'>>;

    @Field(() => [FeatureWhereUniqueInput], {nullable:true})
    @Type(() => FeatureWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeatureWhereUniqueInput, 'id'>>;

    @Field(() => [FeatureUpdateWithWhereUniqueWithoutHouseInput], {nullable:true})
    @Type(() => FeatureUpdateWithWhereUniqueWithoutHouseInput)
    update?: Array<FeatureUpdateWithWhereUniqueWithoutHouseInput>;

    @Field(() => [FeatureUpdateManyWithWhereWithoutHouseInput], {nullable:true})
    @Type(() => FeatureUpdateManyWithWhereWithoutHouseInput)
    updateMany?: Array<FeatureUpdateManyWithWhereWithoutHouseInput>;

    @Field(() => [FeatureScalarWhereInput], {nullable:true})
    @Type(() => FeatureScalarWhereInput)
    deleteMany?: Array<FeatureScalarWhereInput>;
}
