import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseWhereInput } from './house-where.input';

@InputType()
export class HouseNullableScalarRelationFilter {

    @Field(() => HouseWhereInput, {nullable:true})
    is?: HouseWhereInput;

    @Field(() => HouseWhereInput, {nullable:true})
    isNot?: HouseWhereInput;
}
