import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutHouseInput } from './file-create-without-house.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutHouseInput } from './file-create-or-connect-without-house.input';
import { FileUpsertWithWhereUniqueWithoutHouseInput } from './file-upsert-with-where-unique-without-house.input';
import { FileCreateManyHouseInputEnvelope } from './file-create-many-house-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { FileUpdateWithWhereUniqueWithoutHouseInput } from './file-update-with-where-unique-without-house.input';
import { FileUpdateManyWithWhereWithoutHouseInput } from './file-update-many-with-where-without-house.input';
import { FileScalarWhereInput } from './file-scalar-where.input';

@InputType()
export class FileUpdateManyWithoutHouseNestedInput {

    @Field(() => [FileCreateWithoutHouseInput], {nullable:true})
    @Type(() => FileCreateWithoutHouseInput)
    create?: Array<FileCreateWithoutHouseInput>;

    @Field(() => [FileCreateOrConnectWithoutHouseInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutHouseInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutHouseInput>;

    @Field(() => [FileUpsertWithWhereUniqueWithoutHouseInput], {nullable:true})
    @Type(() => FileUpsertWithWhereUniqueWithoutHouseInput)
    upsert?: Array<FileUpsertWithWhereUniqueWithoutHouseInput>;

    @Field(() => FileCreateManyHouseInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyHouseInputEnvelope)
    createMany?: FileCreateManyHouseInputEnvelope;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    set?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id'>>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    disconnect?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id'>>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    delete?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id'>>;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id'>>;

    @Field(() => [FileUpdateWithWhereUniqueWithoutHouseInput], {nullable:true})
    @Type(() => FileUpdateWithWhereUniqueWithoutHouseInput)
    update?: Array<FileUpdateWithWhereUniqueWithoutHouseInput>;

    @Field(() => [FileUpdateManyWithWhereWithoutHouseInput], {nullable:true})
    @Type(() => FileUpdateManyWithWhereWithoutHouseInput)
    updateMany?: Array<FileUpdateManyWithWhereWithoutHouseInput>;

    @Field(() => [FileScalarWhereInput], {nullable:true})
    @Type(() => FileScalarWhereInput)
    deleteMany?: Array<FileScalarWhereInput>;
}
