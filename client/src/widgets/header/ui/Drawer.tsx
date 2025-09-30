"use client";

import {MobileProvider} from "@gravity-ui/uikit";
import {MobileHeader} from "@gravity-ui/navigation";
import {useRouter} from "next/navigation";
import {useEffect, useState} from "react";
import {navItems} from "@/widgets/header/config/config";
import {UsersMeQuery} from "@/gql/graphql";


type PropsType = {
    user?: UsersMeQuery["me"]
}
export const DrawerHeader = ({ user }: PropsType) => {
    const router = useRouter();

    const filteredNavItems = navItems.filter(
        (item) => !item.protected || (item.protected && user)
    );

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const isTouchDevice = 'ontouchstart' in document.documentElement;
        setIsMobile(isTouchDevice);
    }, []);

    return (
        <MobileProvider mobile={isMobile}>
            <MobileHeader
                logo={{ text: "" }}
                burgerMenu={{
                    items: filteredNavItems.map((link) => ({
                        id: link.href,
                        title: link.label,
                        closeMenuOnClick: true,
                        onItemClick: () => {
                            router.push(link.href);
                        },
                    })),
                }}
                renderContent={() => null}
            />
        </MobileProvider>
    );
};