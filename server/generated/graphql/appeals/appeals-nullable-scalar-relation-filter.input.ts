import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealsWhereInput } from './appeals-where.input';

@InputType()
export class AppealsNullableScalarRelationFilter {

    @Field(() => AppealsWhereInput, {nullable:true})
    is?: AppealsWhereInput;

    @Field(() => AppealsWhereInput, {nullable:true})
    isNot?: AppealsWhereInput;
}
