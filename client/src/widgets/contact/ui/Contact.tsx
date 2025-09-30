import styles from "./Contact.module.scss"
import {Handset, Envelope, ListUl} from '@gravity-ui/icons';
import {Button, Text} from "@gravity-ui/uikit"
import {Input} from "@/shared/ui/input/ui/Input";
import Link from "next/link";


export const Contact = () => {
    return (
        <div className={styles.container}>
            <div className={styles.container_left}>
                <div className={styles.container_item}>
                    <div className={styles.container_item_header}>
                        <Handset className={styles.container_item_header_icon}/>
                        <Text variant={"header-1"}>Контакты</Text>
                    </div>

                    <div className={styles.container_item_item}>
                        <Text>Телефон</Text>
                        <Text>Компания</Text>
                    </div>
                    <div className={styles.container_item_item}>
                        <Text>Почта</Text>
                        <Text>Компания</Text>
                    </div>
                </div>

                <div className={styles.container_item}>
                    <div className={styles.container_item_header}>
                        <ListUl className={styles.container_item_header_icon}/>
                        <Text variant={"header-1"}>Реквизиты</Text>
                    </div>

                    <div className={styles.container_item_item}>
                        <Text>Компания</Text>
                        <Text>Компания</Text>
                    </div>
                    <div className={styles.container_item_item}>
                        <Text>ИНН</Text>
                        <Text>Компания</Text>
                    </div>
                    <div className={styles.container_item_item}>
                        <Text>КПП</Text>
                        <Text>Компания</Text>
                    </div>
                    <div className={styles.container_item_item}>
                        <Text>ОГРН</Text>
                        <Text>Компания</Text>
                    </div>
                    <div className={styles.container_item_item}>
                        <Text>Адрес</Text>
                        <Text>Компания</Text>
                    </div>
                </div>
            </div>

            <div className={styles.container_item}>
                <div className={styles.container_item_header}>
                    <Envelope className={styles.container_item_header_icon}/>
                    <Text variant={"header-1"}>Свяжитесь с нами</Text>
                </div>

                <div className={styles.container_item_form}>
                    <Input inputLabel={"Почта"} placeholder={"Почта"}/>
                    <Input inputLabel={"Телефон"} placeholder={"Телефон"}/>
                    <Input inputLabel={"Сообщение"} placeholder={"Сообщение"}/>
                </div>
                <Button view={"action"} className={styles.btn}>Отправить</Button>

                <Text className={styles.text_form} variant={"caption-2"}>
                    Нажимая "Отправить" вы даете согласие на обработку ваших персональных данных в соответствии с
                    <Link href={"/policy"}>
                        Политикой конфиденциальности.
                    </Link>
                </Text>
            </div>
        </div>
    );
};