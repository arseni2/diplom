import Cookies from "js-cookie";
import {client} from "@/app-fsd/providers/apolloProvider/ui/MyApolloProvider";


export const userLogout = async () => {
    Cookies.remove("authToken");

    await client.resetStore()
}

export const isAuthenticated = () => {
    const token = Cookies.get("authToken")
    return !token;
}