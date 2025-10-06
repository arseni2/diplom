"use client"
import {MyLink} from "@/shared/ui/link/ui/MyLink";
import {Button, Text} from "@gravity-ui/uikit";
import styles from "./Header.module.scss"
import Link from "next/link";
import {HeaderUser} from "@/widgets/headerUser/ui/HeaderUser";
import {DrawerHeader} from "@/widgets/header/ui/Drawer";
import clsx from "clsx";
import {navItems} from "@/widgets/header/config/config";
import {getCurrentUser} from "@/features/users/api/api";
import {useQuery} from "@apollo/client/react";
import {UsersMeQuery} from "@/gql/graphql";
import {Logo} from "@/widgets/logo/ui/Logo";
import {useRouter} from "next/navigation";

export const Header = () => {
    const {data} = useQuery<UsersMeQuery>(getCurrentUser)

    return (
        <header className={styles.header}>
            <div className={styles.mobileOnly}>
                <DrawerHeader user={data?.me}/>
            </div>
            <Link href={"/"} className={styles.link}>
                <Logo />
            </Link>

            <nav className={clsx(styles.header_nav, styles.dekstopOnly)}>
                {navItems.map((item) => {
                    //if (item.protected && !data?.me.id) return null;
                    return (
                        <MyLink key={item.href} href={item.href}>
                            <Text variant="body-2">{item.label}</Text>
                        </MyLink>
                    );
                })}
            </nav>

            <div className={styles.header_button}>
                {data?.me.id ? (
                    <HeaderUser
                        firstname={data?.me.firstname || ""}
                        imgUrl={(data?.me.avatar?.path || data?.me.firstname) || ""}
                        items={[
                            {label: "Профиль", action: "profile"},
                        ]}
                    />
                ) : (
                    <>
                        <Link href={"/auth/signin"}>
                            <Button className={styles.header_button_btn} view="outlined" size="l">
                                Войти
                            </Button>
                        </Link>
                        <Link href={"/auth/signup"}>
                            <Button className={styles.header_button_btn} view="action" size="l">
                                Регистрация
                            </Button>
                        </Link>
                    </>
                )}
            </div>
        </header>
    );
};