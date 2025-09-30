import styles from "./SidebarManage.module.scss"
import {Sliders, Persons, ArrowRightFromSquare, Comment, House} from '@gravity-ui/icons';
import Link from "next/link";


export const SidebarManage = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container_list}>
                <Link href={"/manage/appeals"} className={styles.container_list_item}>
                    <Comment width={24} height={24} />
                </Link>

                <Link href={"/manage/houses"} className={styles.container_list_item}>
                    <House width={24} height={24} />
                </Link>

                <Link href={"/manage/users"} className={styles.container_list_item}>
                    <Persons width={24} height={24} />
                </Link>

                <Link href={"/manage/features"} className={styles.container_list_item}>
                    <Sliders width={24} height={24} />
                </Link>
            </div>

            <div>
                <Link href={"/manage/appeals"} className={styles.container_list_item}>
                    <ArrowRightFromSquare width={24} height={24} />
                </Link>
            </div>
        </div>
    );
};