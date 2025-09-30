import { registerEnumType } from '@nestjs/graphql';

export enum AppealsScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    status = "status",
    comment = "comment",
    houseId = "houseId",
    clientId = "clientId",
    realtorId = "realtorId"
}


registerEnumType(AppealsScalarFieldEnum, { name: 'AppealsScalarFieldEnum', description: undefined })
