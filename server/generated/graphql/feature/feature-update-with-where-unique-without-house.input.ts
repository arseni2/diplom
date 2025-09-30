import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeatureWhereUniqueInput } from './feature-where-unique.input';
import { Type } from 'class-transformer';
import { FeatureUpdateWithoutHouseInput } from './feature-update-without-house.input';

@InputType()
export class FeatureUpdateWithWhereUniqueWithoutHouseInput {

    @Field(() => FeatureWhereUniqueInput, {nullable:false})
    @Type(() => FeatureWhereUniqueInput)
    where!: Prisma.AtLeast<FeatureWhereUniqueInput, 'id'>;

    @Field(() => FeatureUpdateWithoutHouseInput, {nullable:false})
    @Type(() => FeatureUpdateWithoutHouseInput)
    data!: FeatureUpdateWithoutHouseInput;
}
