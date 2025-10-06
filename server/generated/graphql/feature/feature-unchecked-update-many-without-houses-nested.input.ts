import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeatureCreateWithoutHousesInput } from './feature-create-without-houses.input';
import { Type } from 'class-transformer';
import { FeatureCreateOrConnectWithoutHousesInput } from './feature-create-or-connect-without-houses.input';
import { FeatureUpsertWithWhereUniqueWithoutHousesInput } from './feature-upsert-with-where-unique-without-houses.input';
import { Prisma } from '@prisma/client';
import { FeatureWhereUniqueInput } from './feature-where-unique.input';
import { FeatureUpdateWithWhereUniqueWithoutHousesInput } from './feature-update-with-where-unique-without-houses.input';
import { FeatureUpdateManyWithWhereWithoutHousesInput } from './feature-update-many-with-where-without-houses.input';
import { FeatureScalarWhereInput } from './feature-scalar-where.input';

@InputType()
export class FeatureUncheckedUpdateManyWithoutHousesNestedInput {

    @Field(() => [FeatureCreateWithoutHousesInput], {nullable:true})
    @Type(() => FeatureCreateWithoutHousesInput)
    create?: Array<FeatureCreateWithoutHousesInput>;

    @Field(() => [FeatureCreateOrConnectWithoutHousesInput], {nullable:true})
    @Type(() => FeatureCreateOrConnectWithoutHousesInput)
    connectOrCreate?: Array<FeatureCreateOrConnectWithoutHousesInput>;

    @Field(() => [FeatureUpsertWithWhereUniqueWithoutHousesInput], {nullable:true})
    @Type(() => FeatureUpsertWithWhereUniqueWithoutHousesInput)
    upsert?: Array<FeatureUpsertWithWhereUniqueWithoutHousesInput>;

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

    @Field(() => [FeatureUpdateWithWhereUniqueWithoutHousesInput], {nullable:true})
    @Type(() => FeatureUpdateWithWhereUniqueWithoutHousesInput)
    update?: Array<FeatureUpdateWithWhereUniqueWithoutHousesInput>;

    @Field(() => [FeatureUpdateManyWithWhereWithoutHousesInput], {nullable:true})
    @Type(() => FeatureUpdateManyWithWhereWithoutHousesInput)
    updateMany?: Array<FeatureUpdateManyWithWhereWithoutHousesInput>;

    @Field(() => [FeatureScalarWhereInput], {nullable:true})
    @Type(() => FeatureScalarWhereInput)
    deleteMany?: Array<FeatureScalarWhereInput>;
}
