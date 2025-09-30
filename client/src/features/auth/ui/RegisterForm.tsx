"use client"
import {useState} from "react";
import styles from "@/features/auth/ui/RegisterForm.module.scss";
import {Button, Text} from "@gravity-ui/uikit";
import {Input} from "@/shared/ui/input/ui/Input";
import {Eye, EyeSlash} from "@gravity-ui/icons";
import Link from "next/link";
import {useForm} from 'react-hook-form';
import {useSignUpMutation} from "@/features/auth/hooks/useSignUpMutation";
import Cookies from 'js-cookie';
import {toaster} from '@gravity-ui/uikit/toaster-singleton';
import { useRouter } from "next/navigation";

export const RegisterForm = () => {
    const [isInputPasswordType, setIsInputPasswordType] = useState(true);
    const [signUpMutation] = useSignUpMutation();
    const router = useRouter();

    const handleClick = () => {
        setIsInputPasswordType((prevState) => !prevState);
    }

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        watch
    } = useForm({
        defaultValues: {
            firstName: '',
            lastName: '',
            middleName: '',
            email: '',
            password: ''
        }
    });

    const onSubmit = async (data) => {
        try {
            console.log('Данные для регистрации:', data);

            // Выполняем мутацию регистрации
            const result = await signUpMutation({
                variables: {
                    email: data.email,
                    password: data.password,
                    // Обратите внимание: firstname не поддерживается бэкендом согласно схеме
                },
            });

            // Получаем токен из ответа
            const { token } = result.data?.signUp;

            if (token) {
                // Сохраняем токен в cookies
                Cookies.set('authToken', token, {
                    expires: 7,
                    path: '/',
                });

                // Показываем уведомление об успешной регистрации
                toaster.add({
                    title: 'Регистрация успешна!',
                    name: "registration-success",
                    content: 'Вы успешно зарегистрировались и вошли в систему.',
                    theme: 'success',
                });

                console.log('Успешная регистрация:', result.data?.signUp);

                // Здесь можно добавить редирект на главную страницу или личный кабинет
                router.push('/');
            } else {
                throw new Error('Token not received from server');
            }
        } catch (error) {
            console.error('Ошибка регистрации:', error);

            // Показываем пользователю сообщение об ошибке
            toaster.add({
                title: 'Ошибка регистрации',
                name: "registration-error",
                content: 'Не удалось зарегистрироваться. Пожалуйста, проверьте введенные данные и попробуйте снова.',
                theme: 'danger',
            });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.form_item}>
                <Text variant={"display-1"}>Добро пожаловать</Text>
                <Text variant={"body-1"} className={styles.form_item_text_secondary}>
                    Добро пожаловать!
                    Пожалуйста, введите свои данные.
                </Text>
            </div>

            <div className={styles.form_item}>
                <Input
                    size={"l"}
                    inputLabel={"Имя"}
                    placeholder={"Имя"}
                    {...register('firstName', {
                        required: 'Имя обязательно для заполнения',
                        minLength: {
                            value: 2,
                            message: 'Имя должно содержать минимум 2 символа'
                        },
                        maxLength: {
                            value: 50,
                            message: 'Имя не должно превышать 50 символов'
                        }
                    })}
                />
                {errors.firstName && (
                    <Text style={{ marginTop: '5px' }}>
                        {errors.firstName.message}
                    </Text>
                )}

                <Input
                    size={"l"}
                    inputLabel={"Фамилия"}
                    placeholder={"Фамилия"}
                    {...register('lastName', {
                        required: 'Фамилия обязательна для заполнения',
                        minLength: {
                            value: 2,
                            message: 'Фамилия должна содержать минимум 2 символа'
                        },
                        maxLength: {
                            value: 50,
                            message: 'Фамилия не должна превышать 50 символов'
                        }
                    })}
                />
                {errors.lastName && (
                    <Text style={{ marginTop: '5px' }}>
                        {errors.lastName.message}
                    </Text>
                )}

                <Input
                    size={"l"}
                    inputLabel={"Отчество"}
                    placeholder={"Отчество"}
                    {...register('middleName', {
                        maxLength: {
                            value: 50,
                            message: 'Отчество не должно превышать 50 символов'
                        }
                    })}
                />
                {errors.middleName && (
                    <Text style={{ marginTop: '5px' }}>
                        {errors.middleName.message}
                    </Text>
                )}

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
                {errors.email && (
                    <Text style={{ marginTop: '5px' }}>
                        {errors.email.message}
                    </Text>
                )}

                <Input
                    type={isInputPasswordType ? "password" : "text"}
                    inputLabel={"Пароль"}
                    placeholder={"Пароль"}
                    size={"l"}
                    {...register('password', {
                        required: 'Пароль обязателен',
                        minLength: {
                            value: 6,
                            message: 'Пароль должен содержать минимум 6 символов'
                        },
                        maxLength: {
                            value: 100,
                            message: 'Пароль не должен превышать 100 символов'
                        },
                        pattern: {
                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
                            message: 'Пароль должен содержать хотя бы одну заглавную букву, одну строчную букву и одну цифру'
                        }
                    })}
                    endContent={
                        isInputPasswordType ?
                            <Eye onClick={handleClick} className={styles.form_icon}/> :
                            <EyeSlash onClick={handleClick} className={styles.form_icon}/>
                    }
                />
                {errors.password && (
                    <Text style={{ marginTop: '5px' }}>
                        {errors.password.message}
                    </Text>
                )}
            </div>

            <div className={styles.form_item}>
                <Button
                    view={"action"}
                    size={"l"}
                    type="submit"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? 'Регистрация...' : 'Регистрация'}
                </Button>
            </div>

            <div className={styles.form_item_text}>
                <Text>Уже есть аккаунт?</Text>
                <Link href={"/auth/signin"} className={styles.form_item_text_link}>
                    Войти
                </Link>
            </div>
        </form>
    );
};