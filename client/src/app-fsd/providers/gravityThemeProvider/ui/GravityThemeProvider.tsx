"use client"
import {ThemeProvider} from "@gravity-ui/uikit";
import {ReactNode} from "react";

type PropsType = {
    children:  ReactNode;
}
export const GravityThemeProvider = ({children}: PropsType) => {
    return (
        <ThemeProvider theme={"light"}>
            {children}
        </ThemeProvider>
    );
};