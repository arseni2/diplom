import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeatureWhereUniqueInput } from './feature-where-unique.input';
import { Type } from 'class-transformer';
import { FeatureUpdateWithoutHousesInput } from './feature-update-without-houses.input';

@InputType()
export class FeatureUpdateWithWhereUniqueWithoutHousesInput {

    @Field(() => FeatureWhereUniqueInput, {nullable:false})
    @Type(() => FeatureWhereUniqueInput)
    where!: Prisma.AtLeast<FeatureWhereUniqueInput, 'id'>;

    @Field(() => FeatureUpdateWithoutHousesInput, {nullable:false})
    @Type(() => FeatureUpdateWithoutHousesInput)
    data!: FeatureUpdateWithoutHousesInput;
}
