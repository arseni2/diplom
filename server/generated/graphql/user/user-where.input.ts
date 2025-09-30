import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { IntFilter } from '../prisma/int-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';
import { StringFilter } from '../prisma/string-filter.input';
import { StringNullableFilter } from '../prisma/string-nullable-filter.input';
import { IntNullableFilter } from '../prisma/int-nullable-filter.input';
import { RoleNullableScalarRelationFilter } from '../role/role-nullable-scalar-relation-filter.input';
import { FileNullableScalarRelationFilter } from '../file/file-nullable-scalar-relation-filter.input';
import { HouseListRelationFilter } from '../house/house-list-relation-filter.input';
import { AppealsListRelationFilter } from '../appeals/appeals-list-relation-filter.input';

@InputType()
export class UserWhereInput {

    @Field(() => [UserWhereInput], {nullable:true})
    AND?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    OR?: Array<UserWhereInput>;

    @Field(() => [UserWhereInput], {nullable:true})
    NOT?: Array<UserWhereInput>;

    @Field(() => IntFilter, {nullable:true})
    id?: IntFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    createdAt?: DateTimeFilter;

    @Field(() => StringFilter, {nullable:true})
    email?: StringFilter;

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

    @Field(() => IntNullableFilter, {nullable:true})
    avatarId?: IntNullableFilter;

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
