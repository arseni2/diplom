import gql from "graphql-tag";

export const getHouseRentQuery = gql`
    query GetHousesRent {
        housesRent {
            id
            createdAt
            title
            description
            address
            square
            remont
            bio
            price
            realtorId
            floor
            rooms
            images {
                id
                path
                name
                size
                houseId
            }
        }
    }
`;

export const getHouseAllQuery = gql`
    query GetHousesAll {
        housesAll {
            id
            createdAt
            title
            description
            address
            square
            remont
            bio
            price
            realtorId
            floor
            rooms
            images {
                id
                path
                name
                size
                houseId
            }
        }
    }
`;

export const getHouseDetailQuery = gql`
    query GetHouseDetail($id: Int!) {
        house(id: $id) {
            id
            createdAt
            title
            description
            address
            square
            remont
            bio
            price
            isRent
            isSell
            realtorId
            realtor {
                id
                createdAt
                email
                firstname
                lastname
                middlename
                password
                telephone
                tg
                roleId
                avatarId
                role {
                    id
                    title
                }
                avatar {
                    id
                    path
                    name
                    size
                }
                houses {
                    id
                    title
                    address
                }
                appealsAsClient {
                    id
                    createdAt
                    status
                    comment
                    clientId
                    realtorId
                    houseId
                }
                appealsAsRealtor {
                    id
                    createdAt
                    status
                    comment
                    clientId
                    realtorId
                    houseId
                }
            }
            images {
                id
                path
                name
                size
                houseId
            }
            features {
                id
                title
                value
            }
        }
    }
`;

export const createHouseMutation = gql`
    mutation createHouse($input: HouseCreateDto!) {
        createHouse(
            createHouseInput: $input
        ) {
            id
            createdAt
            title
            description
            address
            square
            remont
            floor
            rooms
            bio
            price
            isRent
            isSell
            realtorId
            realtor {
                id
                createdAt
                email
                firstname
                lastname
                middlename
                password
                telephone
                tg
                roleId
                avatarId
            }
            images {
                id
                path
                name
                size
                houseId
            }
            features {
                id
                title
                value
            }
            appeal {
                id
                createdAt
                status
                comment
                houseId
                clientId
                realtorId
            }
        }
    }
`

export const getHousesByRealtorId = gql`
    query getHousesByRealtorId($id: Int!) {
        housesRealtor(id: $id) {
            id
            createdAt
            title
            description
            address
            square
            remont
            floor
            rooms
            bio
            price
            isRent
            isSell
            realtorId
            images {
                id
                path
                name
                size
                houseId
            }
            features {
                id
                title
                value
            }
        }
    }
`

export const filterHouseQuery = gql`
    query HousesFilter($address: String, $minPrice: Float, $maxPrice: Float, $isRent: Boolean) {
        housesFilter(address: $address, minPrice: $minPrice, maxPrice: $maxPrice, isRent: $isRent) {
            id
            createdAt
            title
            description
            address
            square
            remont
            floor
            rooms
            bio
            price
            isRent
            isSell
            realtorId
            images {
                id
                path
            }
        }
    }
`

export const updateHouseMutation = gql`
mutation updateHouse($id: Float!, $input: HouseUpdateInput!) {
    updateHouse(id: $id, updateHouseInput: $input) {
        id
        createdAt
        title
        description
        address
        square
        remont
        floor
        rooms
        bio
        price
        isRent
        isSell
        realtorId
        images {
            id
            path
            name
            size
            houseId
        }
        features {
            id
            title
            value
        }
    }
}
`