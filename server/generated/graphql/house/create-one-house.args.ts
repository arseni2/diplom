import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HouseCreateInput } from './house-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneHouseArgs {

    @Field(() => HouseCreateInput, {nullable:false})
    @Type(() => HouseCreateInput)
    data!: HouseCreateInput;
}
