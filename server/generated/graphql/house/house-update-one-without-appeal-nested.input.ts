import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseCreateWithoutAppealInput } from './house-create-without-appeal.input';
import { Type } from 'class-transformer';
import { HouseCreateOrConnectWithoutAppealInput } from './house-create-or-connect-without-appeal.input';
import { HouseUpsertWithoutAppealInput } from './house-upsert-without-appeal.input';
import { HouseWhereInput } from './house-where.input';
import { Prisma } from '@prisma/client';
import { HouseWhereUniqueInput } from './house-where-unique.input';
import { HouseUpdateToOneWithWhereWithoutAppealInput } from './house-update-to-one-with-where-without-appeal.input';

@InputType()
export class HouseUpdateOneWithoutAppealNestedInput {

    @Field(() => HouseCreateWithoutAppealInput, {nullable:true})
    @Type(() => HouseCreateWithoutAppealInput)
    create?: HouseCreateWithoutAppealInput;

    @Field(() => HouseCreateOrConnectWithoutAppealInput, {nullable:true})
    @Type(() => HouseCreateOrConnectWithoutAppealInput)
    connectOrCreate?: HouseCreateOrConnectWithoutAppealInput;

    @Field(() => HouseUpsertWithoutAppealInput, {nullable:true})
    @Type(() => HouseUpsertWithoutAppealInput)
    upsert?: HouseUpsertWithoutAppealInput;

    @Field(() => HouseWhereInput, {nullable:true})
    @Type(() => HouseWhereInput)
    disconnect?: HouseWhereInput;

    @Field(() => HouseWhereInput, {nullable:true})
    @Type(() => HouseWhereInput)
    delete?: HouseWhereInput;

    @Field(() => HouseWhereUniqueInput, {nullable:true})
    @Type(() => HouseWhereUniqueInput)
    connect?: Prisma.AtLeast<HouseWhereUniqueInput, 'id'>;

    @Field(() => HouseUpdateToOneWithWhereWithoutAppealInput, {nullable:true})
    @Type(() => HouseUpdateToOneWithWhereWithoutAppealInput)
    update?: HouseUpdateToOneWithWhereWithoutAppealInput;
}
