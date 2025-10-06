"use client";

import { Avatar, DropdownMenu, Text } from "@gravity-ui/uikit";
import styles from "./HeaderUser.module.scss";
import { ChevronDown } from "@gravity-ui/icons";
import { userLogout } from "@/features/auth/utils/utils";
import clsx from "clsx";
import { useRouter } from "next/navigation"; // для навигации на клиенте

export type DropdownItem = {
    label: string;
    action: "profile" | "settings" | "appeals" | "home"; // ← тип действия, а не функция
    icon?: React.ReactNode;
};

type PropsType = {
    items?: DropdownItem[];
    firstname: string;
    imgUrl?: string;
};

export const HeaderUser = ({ items, firstname, imgUrl }: PropsType) => {
    const router = useRouter();

    const handleItemClick = (action: DropdownItem["action"]) => {
        switch (action) {
            case "home":
                router.push("/");
                break;
            case "profile":
                router.push("/profile");
                break;
            case "settings":
                router.push("/settings");
                break;
            case "appeals":
                router.push("/appeal");
                break;
            default:
                break;
        }
    };

    return (
        <DropdownMenu
            switcher={
                <div className={styles.dropdown}>
                    {imgUrl
                        ? <Avatar imgUrl={imgUrl} />
                        : <Avatar text={firstname} />
                    }
                    <Text>{firstname}</Text>
                    <ChevronDown />
                </div>
            }
        >
            {items?.map((item, index) => (
                <div
                    key={index}
                    className={styles.dropdown_item}
                    onClick={() => handleItemClick(item.action)}
                >
                    {item.icon && <span className={styles.icon}>{item.icon}</span>}
                    <Text>{item.label}</Text>
                </div>
            ))}

            <div
                onClick={async () => {
                    await userLogout()
                    router.push("/auth/login");
                }}
                className={clsx(styles.dropdown_item, styles.dropdown_item_out)}
            >
                <Text>Выйти</Text>
            </div>
        </DropdownMenu>
    );
};