"use client";

import styles from "./ManageHouseCreate.module.scss";
import { Button, Select, Text } from "@gravity-ui/uikit";
import { useForm } from "react-hook-form";
import { useState, useRef, ChangeEvent } from "react";
import { Input } from "@/shared/ui/input/ui/Input";
import {useMutation} from "@apollo/client/react";
import {createHouseMutation} from "@/features/house/api/api";
import {CreateHouseMutation, HouseCreateDto, MutationCreateHouseArgs, UploadFilesMutation} from "@/gql/graphql";
import {fileUploadMutation} from "@/features/file/api/api";
import {useGetFeatures} from "@/features/feature/hooks/useQueryFeatures";


type FileWithMetadata = { file: File; houseId?: string; }
const REMONT_OPTIONS = [
    { value: "без ремонта", content: "Без ремонта" },
    { value: "косметический", content: "Косметический" },
    { value: "евро", content: "Евро" },
    { value: "дизайнерский", content: "Дизайнерский" },
];

const OFFER_TYPE_OPTIONS = [
    { value: "rent", content: "Аренда" },
    { value: "sell", content: "Продажа" },
    { value: "both", content: "Аренда и продажа" },
];

export const ManageHouseCreate = () => {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        watch,
    } = useForm<HouseCreateDto>({
        defaultValues: {
            title: "",
            description: "",
            address: "",
            price: '0',
            square: '0',
            floor: '0',
            rooms: '1',
            remont: "без ремонта",
            isRent: false,
            isSell: false,
        },
    });

    const [submitError, setSubmitError] = useState<string | null>(null);
    const [images, setImages] = useState<FileWithMetadata[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const { data, loading, error, refetch } = useGetFeatures();
    const [mutate] = useMutation<CreateHouseMutation>(createHouseMutation)
    const [uploadFiles] = useMutation<UploadFilesMutation>(fileUploadMutation);

    const offerType = watch("isRent") && watch("isSell")
        ? "both"
        : watch("isRent")
            ? "rent"
            : watch("isSell")
                ? "sell"
                : "none";

    const handleOfferTypeChange = (value: string) => {
        if (value === "rent") {
            reset((prev) => ({ ...prev, isRent: true, isSell: false }));
        } else if (value === "sell") {
            reset((prev) => ({ ...prev, isRent: false, isSell: true }));
        } else if (value === "both") {
            reset((prev) => ({ ...prev, isRent: true, isSell: true }));
        }
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;
        if (!files) {
            setImages([]);
            return;
        }

        const fileList = Array.from(files);
        if (fileList.length < 3) {
            setImages([]);
            return;
        }

        const newImages: FileWithMetadata[] = fileList.slice(0, 10).map(file => ({
            file,
            houseId: undefined,
        }));

        setImages(newImages);
    };

    const onSubmit = async (HouseFormData: any) => {
        setSubmitError(null);

        if (images.length < 3) {
            setSubmitError("Загрузите минимум 3 фотографии");
            return;
        }

        try {
            console.log("Данные формы:", HouseFormData);
            // console.log("Изображения:", images);

            const {data} = await mutate({
                variables: {
                    input: HouseFormData
                }
            })
            setImages((prevState) => {
                return prevState.map((item) => {
                    item.houseId = data?.createHouse.id
                    return item
                })
            })
            const houseId = data?.createHouse?.id;
            setImages(prev => prev.map(img => ({ ...img, houseId })));

            await uploadFiles({
                variables: {
                    files: images.map(img => img.file),
                    houseId,
                },
            });
            alert("Объект успешно создан!");
            reset();
            setImages([]);
            if (fileInputRef.current) fileInputRef.current.value = "";
        } catch (err) {
            console.error(err);
            setSubmitError("Не удалось создать объект.");
        }
    };

    return (
        <div className={styles.container}>
            <Text variant="display-1" className={styles.title}>
                Создать объект недвижимости
            </Text>

            <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
                <Input
                    inputLabel="Название"
                    {...register("title", { required: "Название обязательно" })}
                    placeholder="2-комн. квартира у метро"
                    error={errors.title?.message}
                    size="l"
                />

                <Input
                    inputLabel="Адрес"
                    {...register("address", { required: "Адрес обязателен" })}
                    placeholder="г. Москва, ул. Ленина, д. 10"
                    error={errors.address?.message}
                    size="l"
                />

                <Input
                    inputLabel="Атмосфера"
                    {...register("bio", { required: "Атмосфера обязателен" })}
                    placeholder="Атмосфера"
                    error={errors.address?.message}
                    size="l"
                />

                <Input
                    inputLabel="Описание"
                    {...register("description", { required: "Описание обязательно" })}
                    placeholder="Подробное описание объекта..."
                    error={errors.description?.message}
                    size="l"
                />

                <Select
                    label="Тип предложения"
                    value={[offerType === "none" ? "rent" : offerType]}
                    onUpdate={(vals) => handleOfferTypeChange(vals[0] || "rent")}
                    options={OFFER_TYPE_OPTIONS}
                    size="l"
                />

                <Input
                    inputLabel="Цена (₽)"
                    {...register("price", {
                        required: "Цена обязательна",
                    })}
                    placeholder="10000000"
                    type="text"
                    error={errors.price?.message}
                    size="l"
                />

                <Input
                    inputLabel="Площадь (м²)"
                    {...register("square", {
                        required: "Площадь обязательна",
                    })}
                    placeholder="54"
                    type="text"
                    error={errors.square?.message}
                    size="l"
                />

                <Input
                    inputLabel="Этаж"
                    {...register("floor", {
                        required: "Этаж обязателен",
                    })}
                    placeholder="3"
                    type="text"
                    error={errors.floor?.message}
                    size="l"
                />

                <Input
                    inputLabel="Комнаты"
                    {...register("rooms", {
                        required: "Количество комнат обязательно",
                    })}
                    placeholder="2"
                    type="text"
                    error={errors.rooms?.message}
                    size="l"
                />

                <Select
                    label="Ремонт"
                    value={[watch("remont")]}
                    onUpdate={(vals) => reset((prev) => ({ ...prev, remont: vals[0] || "без ремонта" }))}
                    options={REMONT_OPTIONS}
                    size="l"
                />

                <div className={styles.imageUpload}>
                    <label className={styles.imageUploadLabel}>
                        <Text>Фотографии объекта (минимум 3)</Text>
                        <input
                            ref={fileInputRef}
                            type="file"
                            multiple
                            accept="image/*"
                            onChange={handleImageChange}
                            className={styles.imageUploadInput}
                        />
                    </label>

                    {images.length > 0 && (
                        <div className={styles.imagePreview}>
                            {images.slice(0, 6).map((file, i) => (
                                <div key={i} className={styles.imagePreviewItem}>
                                    <img
                                        src={URL.createObjectURL(file.file)}
                                        alt={`preview-${i}`}
                                        className={styles.previewImage}
                                    />
                                </div>
                            ))}
                            {images.length > 6 && (
                                <Text color="secondary">+{images.length - 6} фото</Text>
                            )}
                        </div>
                    )}

                    {images.length > 0 && images.length < 3 && (
                        <Text color="danger" className={styles.error}>
                            Загрузите минимум 3 изображения
                        </Text>
                    )}
                </div>

                {submitError && (
                    <Text color="danger" className={styles.error}>
                        {submitError}
                    </Text>
                )}

                <div className={styles.actions}>
                    <Button
                        type="button"
                        view="outlined"
                        size="l"
                        onClick={() => {
                            reset();
                            setImages([]);
                            if (fileInputRef.current) fileInputRef.current.value = "";
                        }}
                        disabled={isSubmitting}
                    >
                        Сбросить
                    </Button>
                    <Button type="submit" view="action" size="l" loading={isSubmitting}>
                        Создать объект
                    </Button>
                </div>
            </form>
        </div>
    );
};