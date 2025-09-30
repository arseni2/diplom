import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { FileCreateWithoutHouseInput } from './file-create-without-house.input';

@InputType()
export class FileCreateOrConnectWithoutHouseInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: Prisma.AtLeast<FileWhereUniqueInput, 'id'>;

    @Field(() => FileCreateWithoutHouseInput, {nullable:false})
    @Type(() => FileCreateWithoutHouseInput)
    create!: FileCreateWithoutHouseInput;
}
