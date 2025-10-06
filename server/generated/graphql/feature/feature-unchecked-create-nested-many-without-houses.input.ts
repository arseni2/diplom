import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FeatureCreateWithoutHousesInput } from './feature-create-without-houses.input';
import { Type } from 'class-transformer';
import { FeatureCreateOrConnectWithoutHousesInput } from './feature-create-or-connect-without-houses.input';
import { Prisma } from '@prisma/client';
import { FeatureWhereUniqueInput } from './feature-where-unique.input';

@InputType()
export class FeatureUncheckedCreateNestedManyWithoutHousesInput {

    @Field(() => [FeatureCreateWithoutHousesInput], {nullable:true})
    @Type(() => FeatureCreateWithoutHousesInput)
    create?: Array<FeatureCreateWithoutHousesInput>;

    @Field(() => [FeatureCreateOrConnectWithoutHousesInput], {nullable:true})
    @Type(() => FeatureCreateOrConnectWithoutHousesInput)
    connectOrCreate?: Array<FeatureCreateOrConnectWithoutHousesInput>;

    @Field(() => [FeatureWhereUniqueInput], {nullable:true})
    @Type(() => FeatureWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FeatureWhereUniqueInput, 'id'>>;
}
