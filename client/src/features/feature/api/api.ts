import gql from "graphql-tag";

export const createFeature = gql`
    mutation CreateFeatureMutation($title: String!, $value: String!, $houses: HouseCreateNestedManyWithoutFeaturesInput) {
        createFeature(createFeatureInput: { 
            title: $title, 
            value: $value,
            houses: $houses
        }) {
            id
            title
            value
        }
    }
`;

export const editFeature = gql`
    mutation EditFeatureMutation(
        $id: Int!
        $title: String!
        $value: String!
    ) {
        updateFeature(
            id: $id
            updateFeatureInput: {
                title: {set:$title}
                value: {set:$value}
            }
        ) {
            id
            title
            value
        }
    }
`

export const deleteFeature = gql`
    mutation DeleteFeatureMutation($id: Int!) {
        removeFeature(id: $id) {
            id
            title
            value
        }
    }
`

export const getFeaturesQuery = gql`
    query GetFeatures {
        features {
            id
            title
            value
        }
    }
`;