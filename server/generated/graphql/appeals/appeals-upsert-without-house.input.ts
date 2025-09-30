import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { AppealsUpdateWithoutHouseInput } from './appeals-update-without-house.input';
import { Type } from 'class-transformer';
import { AppealsCreateWithoutHouseInput } from './appeals-create-without-house.input';
import { AppealsWhereInput } from './appeals-where.input';

@InputType()
export class AppealsUpsertWithoutHouseInput {

    @Field(() => AppealsUpdateWithoutHouseInput, {nullable:false})
    @Type(() => AppealsUpdateWithoutHouseInput)
    update!: AppealsUpdateWithoutHouseInput;

    @Field(() => AppealsCreateWithoutHouseInput, {nullable:false})
    @Type(() => AppealsCreateWithoutHouseInput)
    create!: AppealsCreateWithoutHouseInput;

    @Field(() => AppealsWhereInput, {nullable:true})
    @Type(() => AppealsWhereInput)
    where?: AppealsWhereInput;
}
