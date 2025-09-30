import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HouseUpdateManyMutationInput } from './house-update-many-mutation.input';
import { Type } from 'class-transformer';
import { HouseWhereInput } from './house-where.input';
import { Int } from '@nestjs/graphql';

@ArgsType()
export class UpdateManyHouseArgs {

    @Field(() => HouseUpdateManyMutationInput, {nullable:false})
    @Type(() => HouseUpdateManyMutationInput)
    data!: HouseUpdateManyMutationInput;

    @Field(() => HouseWhereInput, {nullable:true})
    @Type(() => HouseWhereInput)
    where?: HouseWhereInput;

    @Field(() => Int, {nullable:true})
    limit?: number;
}
