import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { HouseCreateWithoutAppealsInput } from './house-create-without-appeals.input';
import { Type } from 'class-transformer';
import { HouseCreateOrConnectWithoutAppealsInput } from './house-create-or-connect-without-appeals.input';
import { Prisma } from '@prisma/client';
import { HouseWhereUniqueInput } from './house-where-unique.input';

@InputType()
export class HouseCreateNestedOneWithoutAppealsInput {

    @Field(() => HouseCreateWithoutAppealsInput, {nullable:true})
    @Type(() => HouseCreateWithoutAppealsInput)
    create?: HouseCreateWithoutAppealsInput;

    @Field(() => HouseCreateOrConnectWithoutAppealsInput, {nullable:true})
    @Type(() => HouseCreateOrConnectWithoutAppealsInput)
    connectOrCreate?: HouseCreateOrConnectWithoutAppealsInput;

    @Field(() => HouseWhereUniqueInput, {nullable:true})
    @Type(() => HouseWhereUniqueInput)
    connect?: Prisma.AtLeast<HouseWhereUniqueInput, 'id'>;
}
