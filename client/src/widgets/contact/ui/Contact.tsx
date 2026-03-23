"use client"
import styles from "./Contact.module.scss"
import {Envelope, Handset, ListUl} from '@gravity-ui/icons';
import {Button, Text} from "@gravity-ui/uikit"
import {Input} from "@/shared/ui/input/ui/Input";
import Link from "next/link";
import {useForm} from "react-hook-form";
import {toaster} from "@gravity-ui/uikit/toaster-singleton";


type FormValues = {
    email: string;
    phone: string;
    message: string;
};
export const Contact = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
    } = useForm<FormValues>({
        mode: 'onChange',
    });

    const onSubmit = async (data: FormValues) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tg/contact`, {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify(data),
            })
            if(res.status === 201) {
                toaster.add({
                    name: "tgSendMessageSuccess",
                    content: "Заявка успешно отправлена",
                    title: "Успешно",
                    theme: "success",
                });
                reset()
            }
        } catch (e) {
            toaster.add({
                name: "tgSendMessageError",
                content: "Ошибка отправления заявки",
                title: "Ошибка",
                theme: "danger",
            });
        }
        reset();
    };
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

                <form className={styles.container_item_form} onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        {...register('email', {
                            required: 'Укажите почту',
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: 'Неверный формат почты',
                            },
                        })}
                        error={errors.email?.message}
                        inputLabel="Email"
                        placeholder="Почта"
                    />

                    <Input
                        {...register('phone', {
                            required: 'Укажите телефон',
                            validate: (v) => {
                                const digits = v?.replace(/\D/g, '') ?? '';
                                if (!/^([78])\d{10}$/.test(digits)) {
                                    return 'Введите корректный российский номер';
                                }
                                return true;
                            },
                        })}
                        error={errors.phone?.message}
                        inputLabel="Телефон"
                        placeholder="+7 999 123-45-67"
                    />

                    <Input
                        {...register('message', {
                            required: 'Введите сообщение',
                            minLength: { value: 10, message: 'Минимум 10 символов' },
                        })}
                        error={errors.message?.message}
                        inputLabel="Сообщение"
                        placeholder="Сообщение"
                    />

                    <Button view="action" type="submit" loading={isSubmitting} className={styles.btn}>
                        Отправить
                    </Button>
                </form>

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