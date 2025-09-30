import gql from 'graphql-tag';

export const createAppealMutation = gql`
    mutation CreateAppeal($input: AppealsCreateInput!) {
        createAppeal(createAppealInput: $input) {
            id
            createdAt
            status
            comment
            houseId
            clientId
            realtorId
            house {
                id
                title
                address
                price
            }
            client {
                id
                firstname
                lastname
                email
            }
            realtor {
                id
                firstname
                lastname
                email
            }
        }
    }
`;

export const getAppeals = gql`
    query GetAppeals {
        appeals {
            id
            createdAt
            status
            comment
            houseId
            clientId
            realtorId
            house {
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
            }
            client {
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
        }
    }
`

export const updateAppealMutation = gql`
    mutation UpdateAppeal($id: Int!, $input: AppealsUpdateInput!) {
        updateAppeal(id: $id , updateAppealInput: $input) {
            id
            createdAt
            status
            comment
            houseId
            clientId
            realtorId
            house {
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
            }
            client {
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
        }
    }
`