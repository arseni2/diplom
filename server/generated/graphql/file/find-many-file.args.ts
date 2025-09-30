import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { FileWhereInput } from './file-where.input';
import { Type } from 'class-transformer';
import { FileOrderByWithRelationInput } from './file-order-by-with-relation.input';
import { Prisma } from '@prisma/client';
import { FileWhereUniqueInput } from './file-where-unique.input';
import { Int } from '@nestjs/graphql';
import { FileScalarFieldEnum } from './file-scalar-field.enum';

@ArgsType()
export class FindManyFileArgs {

    @Field(() => FileWhereInput, {nullable:true})
    @Type(() => FileWhereInput)
    where?: FileWhereInput;

    @Field(() => [FileOrderByWithRelationInput], {nullable:true})
    orderBy?: Array<FileOrderByWithRelationInput>;

    @Field(() => FileWhereUniqueInput, {nullable:true})
    cursor?: Prisma.AtLeast<FileWhereUniqueInput, 'id'>;

    @Field(() => Int, {nullable:true})
    take?: number;

    @Field(() => Int, {nullable:true})
    skip?: number;

    @Field(() => [FileScalarFieldEnum], {nullable:true})
    distinct?: Array<`${FileScalarFieldEnum}`>;
}
