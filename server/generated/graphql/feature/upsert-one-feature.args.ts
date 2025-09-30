import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FeatureWhereUniqueInput } from './feature-where-unique.input';
import { Type } from 'class-transformer';
import { FeatureCreateInput } from './feature-create.input';
import { FeatureUpdateInput } from './feature-update.input';

@ArgsType()
export class UpsertOneFeatureArgs {

    @Field(() => FeatureWhereUniqueInput, {nullable:false})
    @Type(() => FeatureWhereUniqueInput)
    where!: Prisma.AtLeast<FeatureWhereUniqueInput, 'id'>;

    @Field(() => FeatureCreateInput, {nullable:false})
    @Type(() => FeatureCreateInput)
    create!: FeatureCreateInput;

    @Field(() => FeatureUpdateInput, {nullable:false})
    @Type(() => FeatureUpdateInput)
    update!: FeatureUpdateInput;
}
