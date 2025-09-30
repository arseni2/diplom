import { registerEnumType } from '@nestjs/graphql';

export enum UserScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    email = "email",
    firstname = "firstname",
    lastname = "lastname",
    middlename = "middlename",
    password = "password",
    telephone = "telephone",
    tg = "tg",
    roleId = "roleId",
    avatarId = "avatarId"
}


registerEnumType(UserScalarFieldEnum, { name: 'UserScalarFieldEnum', description: undefined })
