import Cookies from "js-cookie";
import { redirect, RedirectType } from 'next/navigation'


export const userLogout = () => {
    Cookies.remove("authToken");
    redirect('/auth/signin', RedirectType.replace)
}

export const isAuthenticated = () => {
    const token = Cookies.get("authToken")
    return !token;
}