import {gql} from "graphql-tag"

export const fileUploadMutation = gql`
    mutation uploadFiles($houseId: String, $files: [Upload!]!) {
        uploadFiles(houseId: $houseId, files: $files) {
            id
            url
        }
    }
`;