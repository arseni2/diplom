import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseWhereInput } from './house-where.input';
import { Type } from 'class-transformer';
import { HouseUpdateWithoutAppealInput } from './house-update-without-appeal.input';

@InputType()
export class HouseUpdateToOneWithWhereWithoutAppealInput {

    @Field(() => HouseWhereInput, {nullable:true})
    @Type(() => HouseWhereInput)
    where?: HouseWhereInput;

    @Field(() => HouseUpdateWithoutAppealInput, {nullable:false})
    @Type(() => HouseUpdateWithoutAppealInput)
    data!: HouseUpdateWithoutAppealInput;
}
