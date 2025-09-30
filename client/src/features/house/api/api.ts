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

// export const getHouseBuyQuery = gql``

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
                houseId
            }
        }
    }
`;