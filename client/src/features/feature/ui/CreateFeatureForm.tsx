// src/features/feature/ui/FeatureForm.tsx
"use client";

import styles from "./CreateFeatureForm.module.scss";
import {Input} from "@/shared/ui/input/ui/Input";
import {Button} from "@gravity-ui/uikit";
import {useForm} from "react-hook-form";
import {useCreateFeature} from "@/features/feature/hooks/useCreateFeature";
import {useEditFeature} from "@/features/feature/hooks/useEditFeature";
import {toaster} from "@gravity-ui/uikit/toaster-singleton";

type FeatureFormData = {
    name: string;
    value: string;
};

type PropsType = {
    setFeature?: (feature: { id: number; title: string; value: string } | null) => void
    feature?: { id: number; title: string; value: string };
    refetch?: () => Promise<any>;
};

export const CreateFeatureForm = ({feature, refetch, setFeature}: PropsType) => {
    const isEditing = !!feature;

    const {
        register,
        handleSubmit,
        formState: {errors, isSubmitting},
        reset,
    } = useForm<FeatureFormData>({
        defaultValues: {
            name: feature?.title || "",
            value: feature?.value || "",
        },
    });

    const {mutate: createFeature} = useCreateFeature();
    const {mutate: editFeature} = useEditFeature();

    const onSubmit = async (FeatureFormData: FeatureFormData) => {
        try {
            if (isEditing && feature?.id) {
                await editFeature({
                    variables: {
                        id: feature.id,
                        title: FeatureFormData.name,
                        value: FeatureFormData.value,
                    },
                    onCompleted: () => {
                        toaster.add({
                            name: "featureEditSuccess",
                            content: "Характеристика успешно обновлена",
                            title: "Успешно",
                            theme: "success",
                        });
                        if (refetch) refetch();
                        if (setFeature) setFeature(null);
                    },
                    onError: () => {
                        toaster.add({
                            name: "featureEditError",
                            content: "Ошибка при обновлении характеристики",
                            title: "Ошибка",
                            theme: "danger",
                        });
                    },
                });

                reset();
            } else {
                // Режим создания
                await createFeature({
                    variables: {
                        title: FeatureFormData.name,
                        value: FeatureFormData.value,
                    },
                    onCompleted: () => {
                        toaster.add({
                            name: "featureCreateSuccess",
                            content: "Характеристика успешно создана",
                            title: "Успешно",
                            theme: "success",
                        });
                        reset();
                        if (refetch) refetch();
                    },
                    onError: () => {
                        toaster.add({
                            name: "featureCreateError",
                            content: "Недостаточно прав или ошибка сервера",
                            title: "Ошибка",
                            theme: "danger",
                        });
                    },
                });
            }
        } catch (error) {
            console.error("Ошибка при сохранении:", error);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.formContainer}>
            <div className={styles.inputRow}>
                <div className={styles.inputWrapper}>
                    <Input
                        inputLabel="Название характеристики"
                        placeholder="Введите название"
                        size="m"
                        {...register("name", {
                            required: "Название обязательно",
                        })}
                    />
                    <div className={styles.errorWrapper}>
                        <div
                            className={`${styles.errorText} ${
                                errors.name?.message ? styles.visible : ""
                            }`}
                        >
                            {errors.name?.message || "\u00A0"}
                        </div>
                    </div>
                </div>

                <div className={styles.inputWrapper}>
                    <Input
                        inputLabel="Значение характеристики"
                        placeholder="Введите значение"
                        size="m"
                        {...register("value", {
                            required: "Значение обязательно",
                        })}
                    />
                    <div className={styles.errorWrapper}>
                        <div
                            className={`${styles.errorText} ${
                                errors.value?.message ? styles.visible : ""
                            }`}
                        >
                            {errors.value?.message || "\u00A0"}
                        </div>
                    </div>
                </div>

                <div className={styles.buttonWrapper}>
                    <Button
                        type="submit"
                        view="action"
                        size="m"
                        loading={isSubmitting}
                        disabled={isSubmitting}
                    >
                        {isSubmitting
                            ? "Сохранение..."
                            : isEditing
                                ? "Сохранить"
                                : "Добавить"}
                    </Button>
                </div>
            </div>
        </form>
    );
};