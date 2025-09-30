import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealsWhereInput } from './appeals-where.input';

@InputType()
export class AppealsListRelationFilter {

    @Field(() => AppealsWhereInput, {nullable:true})
    every?: AppealsWhereInput;

    @Field(() => AppealsWhereInput, {nullable:true})
    some?: AppealsWhereInput;

    @Field(() => AppealsWhereInput, {nullable:true})
    none?: AppealsWhereInput;
}
