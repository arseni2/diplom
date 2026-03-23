import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FeatureCreateManyInput } from './feature-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyFeatureArgs {

    @Field(() => [FeatureCreateManyInput], {nullable:false})
    @Type(() => FeatureCreateManyInput)
    data!: Array<FeatureCreateManyInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
