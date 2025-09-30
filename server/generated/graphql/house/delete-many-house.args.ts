import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HouseWhereInput } from './house-where.input';
import { Type } from 'class-transformer';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class DeleteManyHouseArgs {

    @Field(() => HouseWhereInput, {nullable:true})
    @Type(() => HouseWhereInput)
    where?: HouseWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
