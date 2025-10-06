import gql from "graphql-tag";

export const getUsersQuery = gql`
    query Users {
        users {
            id
            createdAt
            email
            firstname
            lastname
            middlename
            password
            roleId
            houses {
                id
            }
            avatarId
            role {
                id
                title
            }
            avatar {
                id
                path
            }
        }
    }
`

export const changeUserRole = gql`
    mutation ChangeUserRole($id: Float!, $roleId: Int!) {
        updateAnyUser(data: { role: {connect: {id: $roleId}} }, id: $id) {
            id
            createdAt
            email
            firstname
            lastname
            middlename
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
                houseId
            }
            houses {
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
            }
        }
    }
`;

export const removeUserMutation = gql`
    mutation RemoveUser($id: Float!) {
        removeAnyUser(id: $id) {
            id
        }
    }
`;

export const getCurrentUser = gql`
    query UsersMe {
        me {
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
                houseId
            }
        }
    }
`

export const userChangeProfile = gql`
    mutation UpdateUser($data: UserUpdateInput!) {
        updateUser(data: $data) {
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
            avatar {
                id
                path
            }
        }
    }
`;

export const getRealtorById = gql`
    query user($id: Int!) {
        user(id: $id) {
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
            avatar {
                id
                path
            }
        }
    }
`