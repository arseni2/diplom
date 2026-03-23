"use client"
import styles from "./SetPasswordForm.module.scss"
import {Input} from "@/shared/ui/input/ui/Input";
import {Button, Text, useToaster} from "@gravity-ui/uikit";
import {Eye, EyeSlash} from "@gravity-ui/icons";
import {useForm} from "react-hook-form";
import {useSetPasswordMutation} from "@/features/auth/hooks/useSetPasswordMutation";
import {useRouter} from "next/navigation";
import {useState, useEffect} from "react";
import Cookies from "js-cookie";
import {client} from "@/app-fsd/providers/apolloProvider/ui/MyApolloProvider";

interface SetPasswordFormProps {
    params: Promise<{ token: string }>;
}

export const SetPasswordForm = ({ params }: SetPasswordFormProps) => {
    const router = useRouter();
    const [token, setToken] = useState<string | null>(null);
    
    useEffect(() => {
        params.then(({ token }) => {
            setToken(token);
        });
    }, [params]);
    
    const { add } = useToaster();
    const [isInputPasswordType, setIsInputPasswordType] = useState(true);
    const [isInputConfirmPasswordType, setIsInputConfirmPasswordType] = useState(true);
    const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm({
        defaultValues: {
            newPassword: '',
            confirmPassword: ''
        }
    });

    const [setPasswordMutation] = useSetPasswordMutation();

    const handleClickPassword = () => {
        setIsInputPasswordType((prevState) => !prevState);
    }

    const handleClickConfirmPassword = () => {
        setIsInputConfirmPasswordType((prevState) => !prevState);
    }

    const onSubmit = async (data: any) => {
        if (!token) {
            add({
                title: 'Ошибка',
                name: "setpassword-error-token",
                content: 'Токен не найден',
                theme: 'danger',
            });
            return;
        }

        try {
            const result = await setPasswordMutation({
                variables: {
                    setPasswordDto: {
                        token: token,
                        newPassword: data.newPassword,
                    }
                }
            });

            // @ts-ignore
            const { token: authToken } = result.data?.setPassword;

            if (authToken) {
                Cookies.set('authToken', authToken, {
                    expires: 7,
                    path: '/',
                });
                await client.refetchQueries({ include: ['UsersMe'] });
            }

            add({
                title: 'Пароль изменён',
                name: "setpassword-success",
                content: 'Ваш пароль был успешно изменён',
                theme: 'success',
            });

            router.push('/');
        } catch (err) {
            add({
                title: 'Ошибка',
                name: "setpassword-error",
                content: 'Не удалось изменить пароль. Попробуйте позже.',
                theme: 'danger',
            });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.form_item}>
                <Text variant={"display-1"}>Установка нового пароля</Text>
                <Text variant={"body-1"} className={styles.form_item_text_secondary}>
                    Придумайте новый пароль
                </Text>
            </div>

            {!token ? (
                <Text>Загрузка...</Text>
            ) : (
                <>
                    <div className={styles.form_item}>
                        <Input
                            type={isInputPasswordType ? "password" : "text"}
                            size={"l"}
                            inputLabel={"Новый пароль"}
                            placeholder={"Новый пароль"}
                            {...register('newPassword', {
                                required: 'Пароль обязателен',
                                minLength: {
                                    value: 6,
                                    message: 'Пароль должен быть минимум 6 символов'
                                }
                            })}
                            endContent={
                                isInputPasswordType ?
                                    <Eye onClick={handleClickPassword} className={styles.form_icon}/> :
                                    <EyeSlash onClick={handleClickPassword} className={styles.form_icon}/>
                            }
                        />
                        {errors.newPassword && <Text style={{marginTop: '5px'}}>{errors.newPassword.message}</Text>}

                        <Input
                            type={isInputConfirmPasswordType ? "password" : "text"}
                            size={"l"}
                            inputLabel={"Подтвердите пароль"}
                            placeholder={"Подтвердите пароль"}
                            {...register('confirmPassword', {
                                required: 'Подтверждение пароля обязательно',
                                validate: (value) => value === watch('newPassword') || 'Пароли не совпадают'
                            })}
                            endContent={
                                isInputConfirmPasswordType ?
                                    <Eye onClick={handleClickConfirmPassword} className={styles.form_icon}/> :
                                    <EyeSlash onClick={handleClickConfirmPassword} className={styles.form_icon}/>
                            }
                        />
                        {errors.confirmPassword && <Text style={{marginTop: '5px'}}>{errors.confirmPassword.message}</Text>}
                    </div>

                    <div className={styles.form_item}>
                        <Button view={"action"} size={"l"} type="submit" disabled={isSubmitting || !token}>
                            {isSubmitting ? 'Сохранение...' : 'Сохранить'}
                        </Button>
                    </div>
                </>
            )}
        </form>
    );
};
