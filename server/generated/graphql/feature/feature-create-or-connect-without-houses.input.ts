import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeatureWhereUniqueInput } from './feature-where-unique.input';
import { Type } from 'class-transformer';
import { FeatureCreateWithoutHousesInput } from './feature-create-without-houses.input';

@InputType()
export class FeatureCreateOrConnectWithoutHousesInput {

    @Field(() => FeatureWhereUniqueInput, {nullable:false})
    @Type(() => FeatureWhereUniqueInput)
    where!: Prisma.AtLeast<FeatureWhereUniqueInput, 'id'>;

    @Field(() => FeatureCreateWithoutHousesInput, {nullable:false})
    @Type(() => FeatureCreateWithoutHousesInput)
    create!: FeatureCreateWithoutHousesInput;
}
