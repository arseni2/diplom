"use client";

import styles from "./Footer.module.scss";
import { Text } from "@gravity-ui/uikit";
import Link from "next/link";
import {Logo} from "@/widgets/logo/ui/Logo";

export const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.brand}>
                    <Logo />
                </div>

                <div className={styles.links}>
                    <div className={styles.linkGroup}>
                        <Text variant="subheader-1" className={styles.groupTitle}>
                            Услуги
                        </Text>
                        <Link href="/rent" className={styles.link}>
                            Аренда
                        </Link>
                        <Link href="/contacts" className={styles.link}>
                            Контакты
                        </Link>
                        <Link href="/buy" className={styles.link}>
                            Покупка
                        </Link>
                    </div>

                    <div className={styles.linkGroup}>
                        <Text variant="subheader-1" className={styles.groupTitle}>
                            Поддержка
                        </Text>
                        <Link href="/policy" className={styles.link}>
                            Правила пользования
                        </Link>
                    </div>

                    <div className={styles.linkGroup}>
                        <Text variant="subheader-1" className={styles.groupTitle}>
                            Для риелторов
                        </Text>
                        <a href="mailto:proludi@gmail.com" className={styles.link}>
                            Стать риелтором
                        </a>
                        <Link href="/manage/houses" className={styles.link}>
                            Панель администартора
                        </Link>
                    </div>
                </div>
            </div>

            <div className={styles.bottom}>
                <Text className={styles.copyright}>
                    © {new Date().getFullYear()} ПроЛюди. Все права защищены.
                </Text>
                <div className={styles.social}>
                    <Text className={styles.policy}>
                        <Link href="/policy">Политика конфиденциальности</Link>
                    </Text>
                    <Text className={styles.policy}>
                        <Link href="/terms">Пользовательское соглашение</Link>
                    </Text>
                </div>
            </div>
        </footer>
    );
};