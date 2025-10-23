"use client";

import styles from "./ManageHouseCreate.module.scss";
import { Button, Select, Text } from "@gravity-ui/uikit";
import { useForm } from "react-hook-form";
import { useState, useRef, ChangeEvent, useEffect } from "react";
import { Input } from "@/shared/ui/input/ui/Input";
import { useMutation, useQuery } from "@apollo/client/react";
import {
    createHouseMutation,
    updateHouseMutation,
    getHouseDetailQuery,
} from "@/features/house/api/api";
import {
    CreateHouseMutation,
    HouseCreateDto,
    UpdateHouseMutation,
    UploadFilesMutation,
    House,
} from "@/gql/graphql";
import { fileUploadMutation } from "@/features/file/api/api";
import { useGetFeatures } from "@/features/feature/hooks/useQueryFeatures";

type FileWithMetadata = { file: File; houseId?: string };

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

interface ManageHouseFormProps {
    houseId?: number; // если передан — режим редактирования
}

export const ManageHouseCreate = ({ houseId }: ManageHouseFormProps) => {
    const [submitError, setSubmitError] = useState<string | null>(null);
    const [images, setImages] = useState<FileWithMetadata[]>([]);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const { data: featuresData, loading: featuresLoading } = useGetFeatures();

    const [createHouse] = useMutation<CreateHouseMutation>(createHouseMutation);
    const [updateHouse] = useMutation<UpdateHouseMutation>(updateHouseMutation);
    const [uploadFiles] = useMutation<UploadFilesMutation>(fileUploadMutation);

    const { data: houseData, loading: houseLoading } = useQuery(getHouseDetailQuery, {
        variables: { id: houseId },
        skip: !houseId,
    });

    const isEditMode = !!houseId;
    const isLoading = featuresLoading || (isEditMode && houseLoading);

    // Определяем начальные значения
    const getDefaultValues = (): HouseCreateDto => {
        if (isEditMode && houseData?.house) {
            const h = houseData.house as House;
            return {
                title: h.title || "",
                description: h.description || "",
                bio: h.bio || "",
                address: h.address || "",
                price: h.price,
                square: String(h.square || "0"),
                floor: String(h.floor || "0"),
                rooms: String(h.rooms || "1"),
                remont: h.remont || "без ремонта",
                isRent: h.isRent || false,
                isSell: h.isSell || false,
            };
        }
        return {
            title: "",
            description: "",
            bio: "",
            address: "",
            price: 0,
            square: "0",
            floor: "0",
            rooms: "1",
            remont: "без ремонта",
            isRent: false,
            isSell: false,
        };
    };

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
        reset,
        watch,
    } = useForm<HouseCreateDto>({
        defaultValues: getDefaultValues(),
    });

    // Синхронизация формы при загрузке данных
    useEffect(() => {
        if (isEditMode && houseData?.house) {
            reset(getDefaultValues());
            // TODO: загрузить текущие изображения (если нужно отображать)
        }
    }, [houseData, isEditMode, reset]);

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
        if (fileList.length < 3 && isEditMode) {
            // В режиме редактирования можно разрешить меньше 3, если уже есть фото?
            // Но пока оставим требование как в оригинале
        }

        const newImages: FileWithMetadata[] = fileList.slice(0, 10).map((file) => ({
            file,
            houseId: undefined,
        }));

        setImages(newImages);
    };

    const onSubmit = async (formData: HouseCreateDto) => {
        setSubmitError(null);

        // В режиме редактирования можно разрешить не загружать новые фото
        if (!isEditMode && images.length < 3) {
            setSubmitError("Загрузите минимум 3 фотографии");
            return;
        }

        try {
            let houseIdResult: string;

            if (isEditMode) {
                const formDataToRequest: any = {}
                for(const key in formData) {
                    formDataToRequest[key] = {set: formData[key]};
                }
                const { data } = await updateHouse({
                    variables: {
                        id: houseId,
                        input: formDataToRequest,
                    },
                });
                houseIdResult = data?.updateHouse.id || houseId;
            } else {
                const { data } = await createHouse({
                    variables: { input: formData },
                });
                houseIdResult = data?.createHouse.id;
                if (!houseIdResult) throw new Error("Не удалось создать объект");
            }

            // Загрузка изображений (только если есть новые файлы)
            if (images.length > 0) {
                await uploadFiles({
                    variables: {
                        files: images.map((img) => img.file),
                        houseId: houseIdResult,
                    },
                });
            }

            alert(isEditMode ? "Объект успешно обновлён!" : "Объект успешно создан!");
            reset();
            setImages([]);
            if (fileInputRef.current) fileInputRef.current.value = "";
        } catch (err) {
            console.error(err);
            setSubmitError(
                isEditMode
                    ? "Не удалось обновить объект."
                    : "Не удалось создать объект."
            );
        }
    };

    const title = isEditMode ? "Редактировать объект" : "Создать объект недвижимости";
    const submitButtonText = isEditMode ? "Сохранить изменения" : "Создать объект";

    if (isLoading) {
        return <Text>Загрузка...</Text>;
    }

    return (
        <div className={styles.container}>
            <Text variant="display-1" className={styles.title}>
                {title}
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
                    {...register("bio", { required: "Атмосфера обязательна" })}
                    placeholder="Уютная, светлая квартира..."
                    error={errors.bio?.message}
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
                    {...register("price", { required: "Цена обязательна" })}
                    placeholder="10000000"
                    type="text"
                    error={errors.price?.message}
                    size="l"
                />

                <Input
                    inputLabel="Площадь (м²)"
                    {...register("square", { required: "Площадь обязательна" })}
                    placeholder="54"
                    type="text"
                    error={errors.square?.message}
                    size="l"
                />

                <Input
                    inputLabel="Этаж"
                    {...register("floor", { required: "Этаж обязателен" })}
                    placeholder="3"
                    type="text"
                    error={errors.floor?.message}
                    size="l"
                />

                <Input
                    inputLabel="Комнаты"
                    {...register("rooms", { required: "Количество комнат обязательно" })}
                    placeholder="2"
                    type="text"
                    error={errors.rooms?.message}
                    size="l"
                />

                <Select
                    label="Ремонт"
                    value={[watch("remont")]}
                    onUpdate={(vals) =>
                        reset((prev) => ({ ...prev, remont: vals[0] || "без ремонта" }))
                    }
                    options={REMONT_OPTIONS}
                    size="l"
                />

                <div className={styles.imageUpload}>
                    <label className={styles.imageUploadLabel}>
                        <Text>
                            {isEditMode
                                ? "Новые фотографии (оставьте пустым, чтобы не менять)"
                                : "Фотографии объекта (минимум 3)"}
                        </Text>
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

                    {!isEditMode && images.length > 0 && images.length < 3 && (
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
                            reset(getDefaultValues());
                            setImages([]);
                            if (fileInputRef.current) fileInputRef.current.value = "";
                        }}
                        disabled={isSubmitting}
                    >
                        Сбросить
                    </Button>
                    <Button type="submit" view="action" size="l" loading={isSubmitting}>
                        {submitButtonText}
                    </Button>
                </div>
            </form>
        </div>
    );
};