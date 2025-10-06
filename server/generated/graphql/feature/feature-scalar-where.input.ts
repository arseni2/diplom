import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';

@InputType()
export class FeatureScalarWhereInput {

    @Field(() => [FeatureScalarWhereInput], {nullable:true})
    AND?: Array<FeatureScalarWhereInput>;

    @Field(() => [FeatureScalarWhereInput], {nullable:true})
    OR?: Array<FeatureScalarWhereInput>;

    @Field(() => [FeatureScalarWhereInput], {nullable:true})
    NOT?: Array<FeatureScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    title?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    value?: StringFilter;
}
