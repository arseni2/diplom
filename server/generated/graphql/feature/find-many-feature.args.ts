import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeatureWhereInput } from './feature-where.input';
import { Type } from 'class-transformer';
import { FeatureOrderByWithRelationInput } from './feature-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FeatureWhereUniqueInput } from './feature-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FeatureScalarFieldEnum } from './feature-scalar-field.enum';

@ArgsType()
export class FindManyFeatureArgs {

    @Field(() => FeatureWhereInput, {nullable:true})
    @Type(() => FeatureWhereInput)
    where?: FeatureWhereInput;

    @Field(() => [FeatureOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FeatureOrderByWithRelationInput>;

    @Field(() => FeatureWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FeatureWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FeatureScalarFieldEnum], {nullable:true})
    distinct?: Array<`${FeatureScalarFieldEnum}`>;
}
