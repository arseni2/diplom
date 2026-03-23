// @ts-ignore
import UploadHttpLink from "apollo-upload-client/UploadHttpLink.mjs";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import Cookies from "js-cookie";

export const createApolloClient = () => {
    const httpLink = new UploadHttpLink({
        uri: `${process.env.NEXT_PUBLIC_API_URL}/graphql`,
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