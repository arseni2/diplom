"use client"
import {Input} from "@/shared/ui/input/ui/Input";
import styles from "./LoginForm.module.scss"
import {Button, Text, useToaster} from "@gravity-ui/uikit"
import {Eye, EyeSlash} from '@gravity-ui/icons';
import {useState} from "react";
import Link from "next/link";
import clsx from "clsx";
import {useForm} from 'react-hook-form';
import Cookies from 'js-cookie';
import {useSignInMutation} from "@/features/auth/hooks/useSignInMutation";
import {useRouter} from "next/navigation";
import {client} from "@/app-fsd/providers/apolloProvider/ui/MyApolloProvider";


export const LoginForm = () => {
    const router = useRouter();
    const [isInputPasswordType, setIsInputPasswordType] = useState(true);
    const {add} = useToaster();
    const {register, handleSubmit, formState: {errors, isSubmitting}} = useForm({
        defaultValues: {
            email: 'user@user.com',
            password: ''
        }
    });

    const [signInMutation] = useSignInMutation();

    const handleClick = () => {
        setIsInputPasswordType((prevState) => !prevState);
    }

    const onSubmit = async (dataParam: any) => {
        try {
            const result = await signInMutation({
                variables: {
                    email: dataParam.email,
                    password: dataParam.password,
                }
            });

            //@ts-ignore
            const { token } = result.data?.signIn;

            if (!token) {
                throw new Error('Token not received');
            }

            // ✅ Устанавливаем куку
            Cookies.set('authToken', token, {
                expires: 7,
                path: '/',
            });

            // ✅ Обновляем Apollo кэш
            await client.refetchQueries({ include: ['UsersMe'] });

            // ✅ Уведомление
            add({
                title: 'Успешный вход',
                name: "login-success",
                content: 'Вы успешно вошли в систему',
                theme: 'success',
            });

            // ✅ Переход
            router.push('/');
        } catch (err) {
            add({
                title: 'Ошибка входа',
                name: "login-error",
                content: 'Неверный email или пароль.',
                theme: 'danger',
            });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.form_item}>
                <Text variant={"display-1"}>Добро пожаловать</Text>
                <Text variant={"body-1"} className={styles.form_item_text_secondary}>
                    Добро пожаловать обратно!
                    Пожалуйста, введите свои данные.
                </Text>
            </div>

            <div className={styles.form_item}>
                {/* Привязываем поле email к react-hook-form */}
                <Input
                    size={"l"}
                    inputLabel={"Почта"}
                    placeholder={"Почта"}
                    {...register('email', {
                        required: 'Email обязателен',
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                            message: 'Неверный формат email'
                        }
                    })}
                />

                {errors.email && <Text style={{marginTop: '5px'}}>{errors.email.message}</Text>}

                <Input
                    type={isInputPasswordType ? "password" : "text"}
                    inputLabel={"Пароль"}
                    placeholder={"Пароль "}
                    size={"l"}
                    {...register('password', {
                        required: 'Пароль обязателен',
                        minLength: {
                            value: 6,
                            message: 'Пароль должен быть минимум 6 символов'
                        }
                    })}
                    endContent={
                        isInputPasswordType ?
                            <Eye onClick={handleClick} className={styles.form_icon}/> :
                            <EyeSlash onClick={handleClick} className={styles.form_icon}/>
                    }
                />
                {errors.password && <Text style={{marginTop: '5px'}}>{errors.password.message}</Text>}

                <Link href={"/auth/forgot"}
                      className={clsx(styles.form_item_text_link, styles.form_center)}>
                    Забыли пароль
                </Link>
            </div>

            <div className={styles.form_item}>
                <Button view={"action"} size={"l"} type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Вход...' : 'Войти'}
                </Button>

                {/* {errors.root?.serverError && <Text variant="danger" style={{ marginTop: '10px' }}>{errors.root.serverError.message}</Text>} */}
            </div>

            <div className={styles.form_item_text}>
                <Text>Нет аккаунта?</Text>
                <Link href={"/auth/signup"}
                      className={styles.form_item_text_link}>
                    Регистрация
                </Link>
            </div>
        </form>
    );
};