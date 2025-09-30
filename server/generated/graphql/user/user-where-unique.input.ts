import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { Int } from '@nestjs/graphql';
import { UserWhereInput } from './user-where.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { RoleNullableScalarRelationFilter } from '../role/role-nullable-scalar-relation-filter.input';
import { FileNullableScalarRelationFilter } from '../file/file-nullable-scalar-relation-filter.input';
import { HouseListRelationFilter } from '../house/house-list-relation-filter.input';
import { AppealsListRelationFilter } from '../appeals/appeals-list-relation-filter.input';

@InputType()
export class UserWhereUniqueInput {

    @Field(() => Int, {nullable:true})
    id?: number;

    @Field(() => String, {nullable:true})
    email?: string;

    @Field(() => Int, {nullable:true})
    avatarId?: number;

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    firstname?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    lastname?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    middlename?: StringNullableFilter;

    @Field(() => StringFilter, {nullable:true})
    password?: StringFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    telephone?: StringNullableFilter;

    @Field(() => StringNullableFilter, {nullable:true})
    tg?: StringNullableFilter;

    @Field(() => IntNullableFilter, {nullable:true})
    roleId?: IntNullableFilter;

    @Field(() => RoleNullableScalarRelationFilter, {nullable:true})
    role?: RoleNullableScalarRelationFilter;

    @Field(() => FileNullableScalarRelationFilter, {nullable:true})
    avatar?: FileNullableScalarRelationFilter;

    @Field(() => HouseListRelationFilter, {nullable:true})
    houses?: HouseListRelationFilter;

    @Field(() => AppealsListRelationFilter, {nullable:true})
    appealsAsClient?: AppealsListRelationFilter;

    @Field(() => AppealsListRelationFilter, {nullable:true})
    appealsAsRealtor?: AppealsListRelationFilter;
}
