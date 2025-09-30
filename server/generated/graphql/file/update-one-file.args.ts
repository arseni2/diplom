import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FileUpdateInput } from './file-update.input';
import { Type } from 'class-transformer';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';

@ArgsType()
export class UpdateOneFileArgs {

    @Field(() => FileUpdateInput, {nullable:false})
    @Type(() => FileUpdateInput)
    data!: FileUpdateInput;

    @Field(() => FileWhereUniqueInput, {nullable:false})
    @Type(() => FileWhereUniqueInput)
    where!: Prisma.AtLeast<FileWhereUniqueInput, 'id'>;
}
