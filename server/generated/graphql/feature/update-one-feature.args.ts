import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeatureUpdateInput } from './feature-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FeatureWhereUniqueInput } from './feature-where-unique.input';

@ArgsType()
export class UpdateOneFeatureArgs {

    @Field(() => FeatureUpdateInput, {nullable:false})
    @Type(() => FeatureUpdateInput)
    data!: FeatureUpdateInput;

    @Field(() => FeatureWhereUniqueInput, {nullable:false})
    @Type(() => FeatureWhereUniqueInput)
    where!: Prisma.AtLeast<FeatureWhereUniqueInput, 'id'>;
}
