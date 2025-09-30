import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { HouseCreateManyInput } from './house-create-many.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateManyHouseArgs {

    @Field(() => [HouseCreateManyInput], {nullable:false})
    @Type(() => HouseCreateManyInput)
    data!: Array<HouseCreateManyInput>;
}
