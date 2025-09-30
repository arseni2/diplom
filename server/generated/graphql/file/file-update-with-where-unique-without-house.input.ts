import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { FileUpdateWithoutHouseInput } from './file-update-without-house.input';

@InputType()
export class FileUpdateWithWhereUniqueWithoutHouseInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: Prisma.AtLeast<FileWhereUniqueInput, 'id'>;

    @Field(() => FileUpdateWithoutHouseInput, {nullable:false})
    @Type(() => FileUpdateWithoutHouseInput)
    data!: FileUpdateWithoutHouseInput;
}
