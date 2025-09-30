import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';

@InputType()
export class FileScalarWhereInput {

    @Field(() => [FileScalarWhereInput], {nullable:true})
    AND?: Array<FileScalarWhereInput>;

    @Field(() => [FileScalarWhereInput], {nullable:true})
    OR?: Array<FileScalarWhereInput>;

    @Field(() => [FileScalarWhereInput], {nullable:true})
    NOT?: Array<FileScalarWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => StringFilter, {nullable:true})
    path?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    name?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    size?: IntNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    houseId?: IntNullableFilter;
}
