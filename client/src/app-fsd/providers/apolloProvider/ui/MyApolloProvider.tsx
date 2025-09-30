"use client"
import {createApolloClient} from "@/app-fsd/providers/apolloProvider/lib/apolloClient";
import {ApolloProvider} from "@apollo/client/react";
import {ReactNode} from "react";

export const client = createApolloClient()
export const MyApolloProvider = ({children}: { children: ReactNode }) => {
    return (
        <ApolloProvider client={client}>
            {children}
        </ApolloProvider>
    );
};