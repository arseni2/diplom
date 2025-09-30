"use client"
import {ReactNode} from "react";
import {ToasterComponent, ToasterProvider} from "@gravity-ui/uikit";
import {toaster} from "@gravity-ui/uikit/toaster-singleton";

export const MyToasterProvider = ({ children }: { children: ReactNode }) => {
    return (
        <ToasterProvider toaster={toaster}>
            <ToasterComponent className="optional additional classes" />
            {children}
        </ToasterProvider>
    );
};