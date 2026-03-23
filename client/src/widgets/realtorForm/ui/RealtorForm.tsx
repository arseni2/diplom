"use client"
import React from "react";
import {useForm, SubmitHandler} from "react-hook-form";
import {Handset} from "@gravity-ui/icons";
import {Button, Text} from "@gravity-ui/uikit";
import {Input} from "@/shared/ui/input/ui/Input";
import styles from "./RealtorForm.module.scss";
import { toaster } from "@gravity-ui/uikit/toaster-singleton";


type FormValues = {
    fullName: string;
    email: string;
    telegram: string;
    phone: string;
};

export const RealtorForm = () => {
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset
    } = useForm<FormValues>();

    const onSubmit: SubmitHandler<FormValues> = async (data) => {
        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/tg`, {
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
    };

    return (
        <form className={styles.container} onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.container_item}>
                <div className={styles.container_item_header}>
                    <Handset className={styles.container_item_header_icon}/>
                    <Text variant="header-1">Форма для становления риелтором</Text>
                </div>

                <div className={styles.container_item_fields}>
                    <Input
                        inputLabel="ФИО"
                        placeholder="ФИО"
                        {...register("fullName", {required: "Обязательное поле"})}
                        error={errors.fullName?.message}
                    />
                    <Input
                        inputLabel="Email"
                        placeholder="Email"
                        {...register("email", {
                            required: "Обязательное поле",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Некорректный email",
                            },
                        })}
                        error={errors.email?.message}
                    />
                    <Input
                        inputLabel="Тг"
                        placeholder="Тг"
                        {...register("telegram")}
                    />
                    <Input
                        inputLabel="Номер"
                        placeholder="Номер"
                        {...register("phone", {required: "Обязательное поле"})}
                        error={errors.phone?.message}
                    />

                    <Button type="submit" view="action" size="l">
                        Отправить
                    </Button>
                </div>
            </div>
        </form>
    );
};