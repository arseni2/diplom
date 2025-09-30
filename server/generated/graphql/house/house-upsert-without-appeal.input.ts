import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseUpdateWithoutAppealInput } from './house-update-without-appeal.input';
import { Type } from 'class-transformer';
import { HouseCreateWithoutAppealInput } from './house-create-without-appeal.input';
import { HouseWhereInput } from './house-where.input';

@InputType()
export class HouseUpsertWithoutAppealInput {

    @Field(() => HouseUpdateWithoutAppealInput, {nullable:false})
    @Type(() => HouseUpdateWithoutAppealInput)
    update!: HouseUpdateWithoutAppealInput;

    @Field(() => HouseCreateWithoutAppealInput, {nullable:false})
    @Type(() => HouseCreateWithoutAppealInput)
    create!: HouseCreateWithoutAppealInput;

    @Field(() => HouseWhereInput, {nullable:true})
    @Type(() => HouseWhereInput)
    where?: HouseWhereInput;
}
