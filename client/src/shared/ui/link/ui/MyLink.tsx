"use client"
import styles from "./MyLink.module.scss"
import Link from "next/link";
import {ReactNode} from "react";
import clsx from "clsx";
import {usePathname} from "next/navigation";

type PropsType = {
    href: string
    children: ReactNode
}
export const MyLink = ({href, children}: PropsType) => {
    const pathname = usePathname();
    const isActive = pathname === href;

    return (
        <Link href={href} className={clsx(styles.link, {[styles.link_active]: isActive})}>
            {children}
        </Link>
    );
};