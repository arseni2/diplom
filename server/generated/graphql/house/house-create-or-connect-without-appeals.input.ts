import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { HouseWhereUniqueInput } from './house-where-unique.input';
import { Type } from 'class-transformer';
import { HouseCreateWithoutAppealsInput } from './house-create-without-appeals.input';

@InputType()
export class HouseCreateOrConnectWithoutAppealsInput {

    @Field(() => HouseWhereUniqueInput, {nullable:false})
    @Type(() => HouseWhereUniqueInput)
    where!: Prisma.AtLeast<HouseWhereUniqueInput, 'id'>;

    @Field(() => HouseCreateWithoutAppealsInput, {nullable:false})
    @Type(() => HouseCreateWithoutAppealsInput)
    create!: HouseCreateWithoutAppealsInput;
}
