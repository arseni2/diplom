import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseWhereInput } from './house-where.input';
import { Type } from 'class-transformer';
import { HouseUpdateWithoutAppealsInput } from './house-update-without-appeals.input';

@InputType()
export class HouseUpdateToOneWithWhereWithoutAppealsInput {

    @Field(() => HouseWhereInput, {nullable:true})
    @Type(() => HouseWhereInput)
    where?: HouseWhereInput;

    @Field(() => HouseUpdateWithoutAppealsInput, {nullable:false})
    @Type(() => HouseUpdateWithoutAppealsInput)
    data!: HouseUpdateWithoutAppealsInput;
}
