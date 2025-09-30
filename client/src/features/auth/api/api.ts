import gql from "graphql-tag";

export const SignInDocument = gql`
    mutation SignIn($email: String!, $password: String!) {
        signIn(createUserInput: { email: $email, password: $password }) {
            id
            createdAt
            email
            password
            roleId
            role {
                id
                title
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
            token
        }
    }
`

export const SignUpDocument = gql`
    mutation SignUp($email: String!, $password: String!, $firstname: String, $lastname: String, $middlename: String) {
        signUp(createUserInput: { email: $email, password: $password, firstname: $firstname, lastname: $lastname, middlename: $middlename }) {
            id
            createdAt
            email
            password
            roleId
            role {
                id
                title
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
            token
        }
    }
`