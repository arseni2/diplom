import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseUpdateWithoutAppealsInput } from './house-update-without-appeals.input';
import { Type } from 'class-transformer';
import { HouseCreateWithoutAppealsInput } from './house-create-without-appeals.input';
import { HouseWhereInput } from './house-where.input';

@InputType()
export class HouseUpsertWithoutAppealsInput {

    @Field(() => HouseUpdateWithoutAppealsInput, {nullable:false})
    @Type(() => HouseUpdateWithoutAppealsInput)
    update!: HouseUpdateWithoutAppealsInput;

    @Field(() => HouseCreateWithoutAppealsInput, {nullable:false})
    @Type(() => HouseCreateWithoutAppealsInput)
    create!: HouseCreateWithoutAppealsInput;

    @Field(() => HouseWhereInput, {nullable:true})
    @Type(() => HouseWhereInput)
    where?: HouseWhereInput;
}
