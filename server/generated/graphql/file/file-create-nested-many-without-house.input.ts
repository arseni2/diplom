import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { FileCreateWithoutHouseInput } from './file-create-without-house.input';
import { Type } from 'class-transformer';
import { FileCreateOrConnectWithoutHouseInput } from './file-create-or-connect-without-house.input';
import { FileCreateManyHouseInputEnvelope } from './file-create-many-house-input-envelope.input';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';

@InputType()
export class FileCreateNestedManyWithoutHouseInput {

    @Field(() => [FileCreateWithoutHouseInput], {nullable:true})
    @Type(() => FileCreateWithoutHouseInput)
    create?: Array<FileCreateWithoutHouseInput>;

    @Field(() => [FileCreateOrConnectWithoutHouseInput], {nullable:true})
    @Type(() => FileCreateOrConnectWithoutHouseInput)
    connectOrCreate?: Array<FileCreateOrConnectWithoutHouseInput>;

    @Field(() => FileCreateManyHouseInputEnvelope, {nullable:true})
    @Type(() => FileCreateManyHouseInputEnvelope)
    createMany?: FileCreateManyHouseInputEnvelope;

    @Field(() => [FileWhereUniqueInput], {nullable:true})
    @Type(() => FileWhereUniqueInput)
    connect?: Array<Prisma.AtLeast<FileWhereUniqueInput, 'id'>>;
}
