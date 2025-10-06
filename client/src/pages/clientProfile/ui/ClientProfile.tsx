"use client";

import styles from "./ClientProfile.module.scss";
import {Avatar, Button, Text} from "@gravity-ui/uikit";
import {useQuery, useMutation} from "@apollo/client/react";
import {getCurrentUser, userChangeProfile} from "@/features/users/api/api";
import {UpdateUserMutation, UpdateUserMutationVariables, UploadFilesMutation, UsersMeQuery} from "@/gql/graphql";
import {Input} from "@/shared/ui/input/ui/Input";
import {useForm, SubmitHandler} from "react-hook-form";
import {ChangeEvent, useEffect, useState} from "react";
import {fileUploadMutation} from "@/features/file/api/api"

type ProfileFormData = {
    firstname: string;
    lastname: string;
    middlename: string;
    email: string;
    telephone: string;
    tg: string;
    avatar?: FileList;
};
//e2e tests
export const ClientProfile = () => {
    const {data, loading, error, refetch} = useQuery<UsersMeQuery>(getCurrentUser);
    const [uploadFiles] = useMutation<UploadFilesMutation>(fileUploadMutation);
    const [updateUser] = useMutation<UpdateUserMutation, UpdateUserMutationVariables>(userChangeProfile);

    const [previewAvatar, setPreviewAvatar] = useState<string | null>(data?.me?.avatar?.path || null);
    const [avatarFile, setAvatarFile] = useState<File | null>(null);

    const {
        register,
        handleSubmit,
        reset,
        formState: {errors},
    } = useForm<Omit<ProfileFormData, "avatar"> & { avatar?: FileList }>({
        defaultValues: {
            firstname: "",
            lastname: "",
            middlename: "",
            email: "",
            telephone: "",
            tg: "",
        },
    });

    useEffect(() => {
        if (data?.me) {
            reset({
                firstname: data.me.firstname || "",
                lastname: data.me.lastname || "",
                middlename: data.me.middlename || "",
                email: data.me.email,
                telephone: data.me.telephone || "",
                tg: data.me.tg || "",
            });
            if (data.me.avatar?.path) {
                setPreviewAvatar(data.me.avatar.path);
            } else {
                setPreviewAvatar(null);
            }
        }
    }, [data, reset]);

    const handleAvatarChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0] || null;
        setAvatarFile(file);

        if (file) {
            const url = URL.createObjectURL(file);
            setPreviewAvatar(url);
        } else if (data?.me?.avatar?.path) {
            setPreviewAvatar(data.me.avatar.path);
        } else {
            setPreviewAvatar(null);
        }
    };

    const onSubmit: SubmitHandler<ProfileFormData> = async (formData) => {
        const {avatar, ...rest} = formData;
        let avatarId: number | null;

        if (avatarFile) {
            const {data: uploadData} = await uploadFiles({
                variables: {
                    files: [avatarFile],
                },
            });
            console.log(uploadData)
            avatarId = uploadData?.uploadFiles?.[0]?.id || null;
        } else {
            avatarId = data?.me.avatarId || null;
        }

        await updateUser({
            variables: {
                data: {
                    firstname: {
                        set: "123"
                    },
                    avatar: {
                        connect: {
                            id: avatarId
                        }
                    }
                },
            },
        });
        if (previewAvatar && previewAvatar.startsWith("blob:")) {
            URL.revokeObjectURL(previewAvatar);
        }
    };

    useEffect(() => {
        return () => {
            if (previewAvatar && previewAvatar.startsWith("blob:")) {
                URL.revokeObjectURL(previewAvatar);
            }
        };
    }, [previewAvatar]);

    if (loading) return <Text>Загрузка профиля...</Text>;
    if (error) return <Text color="danger">Не удалось загрузить профиль</Text>;
    console.log(previewAvatar)
    return (
        <div className={styles.container}>
            <Text variant="display-1" className={styles.title}>
                Профиль
            </Text>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <Input
                    {...register("firstname", {required: "Имя обязательно для заполнения"})}
                    inputLabel="Имя"
                    data-testid={"input-first-name"}
                    error={errors.firstname?.message}
                    className={styles.input}
                />

                <Input
                    {...register("lastname", {required: "Фамилия обязательна для заполнения"})}
                    inputLabel="Фамилия"
                    error={errors.lastname?.message}
                    className={styles.input}
                />

                <Input
                    {...register("middlename")}
                    inputLabel="Отчество"
                    error={errors.middlename?.message}
                    className={styles.input}
                />

                <Input
                    {...register("email", {
                        required: "Email обязателен",
                        pattern: {
                            value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                            message: "Некорректный адрес электронной почты",
                        },
                    })}
                    inputLabel="Email"
                    type="email"
                    error={errors.email?.message}
                    className={styles.input}
                />

                <Input
                    {...register("telephone", {
                        pattern: {
                            value: /^(\+7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
                            message: "Неверный формат телефона (пример: +7 999 123-45-67)",
                        },
                    })}
                    inputLabel="Телефон"
                    placeholder="+7 (999) 123-45-67"
                    error={errors.telephone?.message}
                    className={styles.input}
                />

                <Input
                    {...register("tg")}
                    inputLabel="Telegram"
                    placeholder="@username"
                    error={errors.tg?.message}
                    className={styles.input}
                />


                <div className={styles.avatarSection}>
                    <Input
                        {...register("avatar")}
                        inputLabel="Аватар"
                        type="file"
                        accept="image/*"
                        error={errors.avatar?.message}
                        className={styles.input}
                        onChange={handleAvatarChange}
                    />

                    {previewAvatar ? (
                        <Avatar
                            size="xl"
                            imgUrl={previewAvatar}
                            className={styles.avatarPreview}
                        />
                    ) : (
                        <Avatar size="xl" text={data?.me.firstname || ""} className={styles.avatarPreview}/>
                    )}
                </div>

                <Button role={"button"} view={"action"} type="submit">
                    Сохранить изменения
                </Button>
            </form>
        </div>
    );
};