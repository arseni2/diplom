import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseWhereInput } from './house-where.input';

@InputType()
export class HouseListRelationFilter {

    @Field(() => HouseWhereInput, {nullable:true})
    every?: HouseWhereInput;

    @Field(() => HouseWhereInput, {nullable:true})
    some?: HouseWhereInput;

    @Field(() => HouseWhereInput, {nullable:true})
    none?: HouseWhereInput;
}
