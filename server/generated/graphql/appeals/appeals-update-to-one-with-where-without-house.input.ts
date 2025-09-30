import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealsWhereInput } from './appeals-where.input';
import { Type } from 'class-transformer';
import { AppealsUpdateWithoutHouseInput } from './appeals-update-without-house.input';

@InputType()
export class AppealsUpdateToOneWithWhereWithoutHouseInput {

    @Field(() => AppealsWhereInput, {nullable:true})
    @Type(() => AppealsWhereInput)
    where?: AppealsWhereInput;

    @Field(() => AppealsUpdateWithoutHouseInput, {nullable:false})
    @Type(() => AppealsUpdateWithoutHouseInput)
    data!: AppealsUpdateWithoutHouseInput;
}
