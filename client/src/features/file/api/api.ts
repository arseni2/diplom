import {gql} from "graphql-tag"

export const fileUploadMutation = gql`
    mutation uploadFiles($files: [Upload!]!) {
        uploadFiles(files: $files) {
            id
            url
        }
    }
`;