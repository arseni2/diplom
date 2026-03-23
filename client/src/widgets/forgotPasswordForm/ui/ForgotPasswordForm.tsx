"use client"
import styles from "./ForgotPasswordForm.module.scss"
import {Input} from "@/shared/ui/input/ui/Input";
import {Button, Text, useToaster} from "@gravity-ui/uikit";
import {useForm} from "react-hook-form";
import {useForgotPasswordMutation} from "@/features/auth/hooks/useForgotPasswordMutation";
import {useRouter} from "next/navigation";
import Cookies from "js-cookie";
import {client} from "@/app-fsd/providers/apolloProvider/ui/MyApolloProvider";

export const ForgotPasswordForm = () => {
    const router = useRouter();
    const { add } = useToaster();
    const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm({
        defaultValues: {
            email: ''
        }
    });

    const [forgotPasswordMutation] = useForgotPasswordMutation();

    const onSubmit = async (data: any) => {
        try {
            const result = await forgotPasswordMutation({
                variables: {
                    email: data.email,
                }
            });

            // @ts-ignore
            const { token } = result.data?.forgotPassword;

            if (token) {
                Cookies.set('authToken', token, {
                    expires: 7,
                    path: '/',
                });
                await client.refetchQueries({ include: ['UsersMe'] });
            }

            add({
                title: 'Письмо отправлено',
                name: "forgot-success",
                content: 'Ссылка для сброса пароля отправлена на вашу почту',
                theme: 'success',
            });

            router.push('/');
        } catch (err) {
            add({
                title: 'Ошибка',
                name: "forgot-error",
                content: 'Не удалось отправить письмо. Попробуйте позже.',
                theme: 'danger',
            });
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
            <div className={styles.form_item}>
                <Text variant={"display-1"}>Сброс пароля</Text>
                <Text variant={"body-1"} className={styles.form_item_text_secondary}>
                    Введите вашу почту, и мы отправим ссылку для сброса пароля
                </Text>
            </div>

            <div className={styles.form_item}>
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
            </div>

            <div className={styles.form_item}>
                <Button view={"action"} size={"l"} type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Отправка...' : 'Отправить'}
                </Button>
            </div>
        </form>
    );
};