"use client";

import styles from "./SidebarManage.module.scss";
import { Sliders, Persons, ArrowRightFromSquare, Comment, House } from '@gravity-ui/icons';
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

export const SidebarManage = () => {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path;

    return (
        <div className={styles.container}>
            <div className={styles.container_list}>
                <Link
                    href="/manage/appeals"
                    className={clsx(styles.container_list_item, {
                        [styles.active]: isActive('/manage/appeals'),
                    })}
                >
                    <Comment width={24} height={24} />
                </Link>

                <Link
                    href="/manage/houses"
                    className={clsx(styles.container_list_item, {
                        [styles.active]: isActive('/manage/houses'),
                    })}
                >
                    <House width={24} height={24} />
                </Link>

                <Link
                    href="/manage/users"
                    className={clsx(styles.container_list_item, {
                        [styles.active]: isActive('/manage/users'),
                    })}
                >
                    <Persons width={24} height={24} />
                </Link>

                <Link
                    href="/manage/features"
                    className={clsx(styles.container_list_item, {
                        [styles.active]: isActive('/manage/features'),
                    })}
                >
                    <Sliders width={24} height={24} />
                </Link>
            </div>

            <div>
                <Link
                    href="/auth/signout"
                    className={clsx(styles.container_list_item, {
                        [styles.active]: isActive('/auth/signout'),
                    })}
                >
                    <ArrowRightFromSquare width={24} height={24} />
                </Link>
            </div>
        </div>
    );
};