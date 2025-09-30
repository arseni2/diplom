import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeatureWhereUniqueInput } from './feature-where-unique.input';
import { Type } from 'class-transformer';
import { FeatureUpdateWithoutHouseInput } from './feature-update-without-house.input';
import { FeatureCreateWithoutHouseInput } from './feature-create-without-house.input';

@InputType()
export class FeatureUpsertWithWhereUniqueWithoutHouseInput {

    @Field(() => FeatureWhereUniqueInput, {nullable:false})
    @Type(() => FeatureWhereUniqueInput)
    where!: Prisma.AtLeast<FeatureWhereUniqueInput, 'id'>;

    @Field(() => FeatureUpdateWithoutHouseInput, {nullable:false})
    @Type(() => FeatureUpdateWithoutHouseInput)
    update!: FeatureUpdateWithoutHouseInput;

    @Field(() => FeatureCreateWithoutHouseInput, {nullable:false})
    @Type(() => FeatureCreateWithoutHouseInput)
    create!: FeatureCreateWithoutHouseInput;
}
