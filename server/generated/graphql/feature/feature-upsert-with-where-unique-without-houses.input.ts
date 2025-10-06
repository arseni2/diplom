import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeatureWhereUniqueInput } from './feature-where-unique.input';
import { Type } from 'class-transformer';
import { FeatureUpdateWithoutHousesInput } from './feature-update-without-houses.input';
import { FeatureCreateWithoutHousesInput } from './feature-create-without-houses.input';

@InputType()
export class FeatureUpsertWithWhereUniqueWithoutHousesInput {

    @Field(() => FeatureWhereUniqueInput, {nullable:false})
    @Type(() => FeatureWhereUniqueInput)
    where!: Prisma.AtLeast<FeatureWhereUniqueInput, 'id'>;

    @Field(() => FeatureUpdateWithoutHousesInput, {nullable:false})
    @Type(() => FeatureUpdateWithoutHousesInput)
    update!: FeatureUpdateWithoutHousesInput;

    @Field(() => FeatureCreateWithoutHousesInput, {nullable:false})
    @Type(() => FeatureCreateWithoutHousesInput)
    create!: FeatureCreateWithoutHousesInput;
}
