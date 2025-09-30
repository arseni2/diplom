import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeatureCreateWithoutHouseInput } from './feature-create-without-house.input';
import { Type } from 'class-transformer';
import { FeatureCreateOrConnectWithoutHouseInput } from './feature-create-or-connect-without-house.input';
import { FeatureCreateManyHouseInputEnvelope } from './feature-create-many-house-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FeatureWhereUniqueInput } from './feature-where-unique.input';

@InputType()
export class FeatureUncheckedCreateNestedManyWithoutHouseInput {

    @Field(() => [FeatureCreateWithoutHouseInput], {nullable:true})
    @Type(() => FeatureCreateWithoutHouseInput)
    create?: Array<FeatureCreateWithoutHouseInput>;

    @Field(() => [FeatureCreateOrConnectWithoutHouseInput], {nullable:true})
    @Type(() => FeatureCreateOrConnectWithoutHouseInput)
    connectOrCreate?: Array<FeatureCreateOrConnectWithoutHouseInput>;

    @Field(() => FeatureCreateManyHouseInputEnvelope, {nullable:true})
    @Type(() => FeatureCreateManyHouseInputEnvelope)
    createMany?: FeatureCreateManyHouseInputEnvelope;

    @Field(() => [FeatureWhereUniqueInput], {nullable:true})
    @Type(() => FeatureWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeatureWhereUniqueInput, 'id'>>;
}
