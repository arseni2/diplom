import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutUserInput } from './file-create-without-user.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutUserInput } from './file-create-or-connect-without-user.input';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileCreateNestedOneWithoutUserInput {

    @Field(() => FileCreateWithoutUserInput, {nullable:true})
    @Type(() => FileCreateWithoutUserInput)
    create?: FileCreateWithoutUserInput;

    @Field(() => FileCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => FileCreateOrConnectWithoutUserInput)
    connectOrCreate?: FileCreateOrConnectWithoutUserInput;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Prisma.AtLeast<FileWhereUniqueInput, 'id'>;
}
