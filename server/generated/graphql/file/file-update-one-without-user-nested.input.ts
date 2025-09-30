import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutUserInput } from './file-create-without-user.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutUserInput } from './file-create-or-connect-without-user.input';
import { FileUpsertWithoutUserInput } from './file-upsert-without-user.input';
import { FileWhereInput } from './file-where.input';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateToOneWithWhereWithoutUserInput } from './file-update-to-one-with-where-without-user.input';

@InputType()
export class FileUpdateOneWithoutUserNestedInput {

    @Field(() => FileCreateWithoutUserInput, {nullable:true})
    @Type(() => FileCreateWithoutUserInput)
    create?: FileCreateWithoutUserInput;

    @Field(() => FileCreateOrConnectWithoutUserInput, {nullable:true})
    @Type(() => FileCreateOrConnectWithoutUserInput)
    connectOrCreate?: FileCreateOrConnectWithoutUserInput;

    @Field(() => FileUpsertWithoutUserInput, {nullable:true})
    @Type(() => FileUpsertWithoutUserInput)
    upsert?: FileUpsertWithoutUserInput;

    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    disconnect?: FileWhereInput;

    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    delete?: FileWhereInput;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Prisma.AtLeast<FileWhereUniqueInput, 'id'>;

    @Field(() => FileUpdateToOneWithWhereWithoutUserInput, {nullable:true})
    @Type(() => FileUpdateToOneWithWhereWithoutUserInput)
    update?: FileUpdateToOneWithWhereWithoutUserInput;
}
