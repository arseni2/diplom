// @ts-ignore
import UploadHttpLink from "apollo-upload-client/UploadHttpLink.mjs";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Cookies from "js-cookie";

export const createApolloClient = () => {
    const httpLink = new UploadHttpLink({
        uri: "http://localhost:7777/graphql",
    });

    const authLink = setContext((_, { headers }) => {
        const token = Cookies.get("authToken");
        return {
            headers: {
                ...headers,
                ...(token ? { authorization: `Bearer ${token}` } : {}),
            },
        };
    });

    return new ApolloClient({
        link: authLink.concat(httpLink),
        cache: new InMemoryCache(),
    });
};