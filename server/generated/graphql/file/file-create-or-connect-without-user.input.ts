import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Type } from 'class-transformer';
import { FileCreateWithoutUserInput } from './file-create-without-user.input';

@InputType()
export class FileCreateOrConnectWithoutUserInput {

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: Prisma.AtLeast<FileWhereUniqueInput, 'id'>;

    @Field(() => FileCreateWithoutUserInput, {nullable:false})
    @Type(() => FileCreateWithoutUserInput)
    create!: FileCreateWithoutUserInput;
}
