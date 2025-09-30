import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { HouseNullableScalarRelationFilter } from '../house/house-nullable-scalar-relation-filter.input';
import { UserNullableScalarRelationFilter } from '../user/user-nullable-scalar-relation-filter.input';

@InputType()
export class FileWhereInput {

    @Field(() => [FileWhereInput], {nullable:true})
    AND?: Array<FileWhereInput>;

    @Field(() => [FileWhereInput], {nullable:true})
    OR?: Array<FileWhereInput>;

    @Field(() => [FileWhereInput], {nullable:true})
    NOT?: Array<FileWhereInput>;

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

    @Field(() => HouseNullableScalarRelationFilter, {nullable:true})
    house?: HouseNullableScalarRelationFilter;

    @Field(() => UserNullableScalarRelationFilter, {nullable:true})
    user?: UserNullableScalarRelationFilter;
}
