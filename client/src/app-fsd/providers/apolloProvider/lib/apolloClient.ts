import {ApolloClient, InMemoryCache} from "@apollo/client";
import Cookies from "js-cookie";
// @ts-ignore
import UploadHttpLink from "apollo-upload-client/UploadHttpLink.mjs";


export const createApolloClient = () => {
    const token = Cookies.get("authToken");
    return new ApolloClient({
        link: new UploadHttpLink({
            uri: "http://localhost:7777/graphql",
            headers: {
                authorization: token ? `Bearer ${token}` : "",
            }
        }),
        cache: new InMemoryCache()
    });
};