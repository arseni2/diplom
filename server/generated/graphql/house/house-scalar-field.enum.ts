import { registerEnumType } from '@nestjs/graphql';

export enum HouseScalarFieldEnum {
    id = "id",
    createdAt = "createdAt",
    title = "title",
    description = "description",
    address = "address",
    square = "square",
    remont = "remont",
    floor = "floor",
    rooms = "rooms",
    bio = "bio",
    price = "price",
    isRent = "isRent",
    isSell = "isSell",
    realtorId = "realtorId"
}


registerEnumType(HouseScalarFieldEnum, { name: 'HouseScalarFieldEnum', description: undefined })
