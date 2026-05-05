import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseCreateWithoutAppealsInput } from './house-create-without-appeals.input';
import { Type } from 'class-transformer';
import { HouseCreateOrConnectWithoutAppealsInput } from './house-create-or-connect-without-appeals.input';
import { HouseUpsertWithoutAppealsInput } from './house-upsert-without-appeals.input';
import { HouseWhereInput } from './house-where.input';
import { Prisma } from '@prisma/client';
import { HouseWhereUniqueInput } from './house-where-unique.input';
import { HouseUpdateToOneWithWhereWithoutAppealsInput } from './house-update-to-one-with-where-without-appeals.input';

@InputType()
export class HouseUpdateOneWithoutAppealsNestedInput {

    @Field(() => HouseCreateWithoutAppealsInput, {nullable:true})
    @Type(() => HouseCreateWithoutAppealsInput)
    create?: HouseCreateWithoutAppealsInput;

    @Field(() => HouseCreateOrConnectWithoutAppealsInput, {nullable:true})
    @Type(() => HouseCreateOrConnectWithoutAppealsInput)
    connectOrCreate?: HouseCreateOrConnectWithoutAppealsInput;

    @Field(() => HouseUpsertWithoutAppealsInput, {nullable:true})
    @Type(() => HouseUpsertWithoutAppealsInput)
    upsert?: HouseUpsertWithoutAppealsInput;

    @Field(() => HouseWhereInput, {nullable:true})
    @Type(() => HouseWhereInput)
    disconnect?: HouseWhereInput;

    @Field(() => HouseWhereInput, {nullable:true})
    @Type(() => HouseWhereInput)
    delete?: HouseWhereInput;

    @Field(() => HouseWhereUniqueInput, {nullable:true})
    @Type(() => HouseWhereUniqueInput)
    connect?: Prisma.AtLeast<HouseWhereUniqueInput, 'id'>;

    @Field(() => HouseUpdateToOneWithWhereWithoutAppealsInput, {nullable:true})
    @Type(() => HouseUpdateToOneWithWhereWithoutAppealsInput)
    update?: HouseUpdateToOneWithWhereWithoutAppealsInput;
}
