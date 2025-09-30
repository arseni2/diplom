"use client";

import styles from "./ManageFeatures.module.scss";
import { Input } from "@/shared/ui/input/ui/Input";
import { Button, Select, Text } from "@gravity-ui/uikit";
import { TrashBin, Pencil } from '@gravity-ui/icons'; // ← Добавил Pencil
import { useState } from 'react';
import { CreateFeatureForm } from "@/features/feature/ui/CreateFeatureForm"; // ← Обновлённое имя
import { useGetFeatures } from "@/features/feature/hooks/useQueryFeatures";
import { useDeleteFeature } from "@/features/feature/hooks/useDeleteFeature";
import { toaster } from "@gravity-ui/uikit/toaster-singleton";

export const ManageFeatures = () => {
    const { data, loading, error, refetch } = useGetFeatures();
    const { mutate: deleteFeatureMutation } = useDeleteFeature();

    const [search, setSearch] = useState("");
    const [editingFeature, setEditingFeature] = useState<{
        id: number;
        title: string;
        value: string;
    } | null>(null);

    const handleClickDelete = async (id: number) => {
        await deleteFeatureMutation({
            variables: { id },
            onCompleted: () => {
                toaster.add({
                    name: "featureDeleteSuccess",
                    content: "Характеристика успешно удалена",
                    title: "Успешно",
                    theme: "success",
                });
                if (refetch) refetch();
            },
            onError: () => {
                toaster.add({
                    name: "featureDeleteError",
                    content: "Ошибка при удалении характеристики",
                    title: "Ошибка",
                    theme: "danger",
                });
            },
        });
    };

    const handleEditClick = (feature: { id: number; title: string; value: string }) => {
        setEditingFeature(feature);
    };

    const handleCloseForm = () => {
        setEditingFeature(null);
    };

    if (loading) {
        return <div className={styles.container}>Загрузка...</div>;
    }

    if (error) {
        return <div className={styles.container}>Ошибка загрузки характеристик</div>;
    }

    return (
        <div className={styles.container}>
            <div className={styles.filter}>
                <div style={{ flex: 1 }}>
                    <Input
                        placeholder="Поиск"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        style={{ width: '100%' }}
                    />
                </div>
                <Select className={styles.filter_input} label="Сортировка">
                    <Select.Option value="title">По названию</Select.Option>
                    <Select.Option value="value">По значению</Select.Option>
                </Select>
            </div>

            {editingFeature && (
                <div className={styles.editFormWrapper}>
                    <CreateFeatureForm
                        setFeature={setEditingFeature}
                        feature={editingFeature}
                        refetch={refetch}
                    />
                    <div className={styles.editFormHeader}>
                        <Button
                            view="action"
                            onClick={handleCloseForm}
                            size="s"
                        >
                            Отмена
                        </Button>
                    </div>
                </div>
            )}

            {/* Форма создания (всегда показываем) */}
            {!editingFeature && (
                <div className={styles.createFormWrapper}>
                    <CreateFeatureForm refetch={refetch} />
                </div>
            )}

            <div className={styles.features_container}>
                {data?.features && data.features.length > 0 ? (
                    data.features.map((feature) => (
                        <div
                            key={feature.id}
                            className={styles.features_container_item}
                        >
                            <Text variant="body-2" className={styles.feature_title}>
                                {feature.title}
                            </Text>
                            <div className={styles.features_container_item_btns}>
                                <Text variant="body-2" className={styles.feature_value}>
                                    {feature.value}
                                </Text>

                                <div
                                    onClick={() => handleEditClick({...feature, id: Number(feature.id)})}
                                    className={styles.features_container_item_btns_wrapper_edit}
                                    title="Редактировать"
                                >
                                    <Pencil className={styles.btn_edit} />
                                </div>

                                <div
                                    onClick={() => handleClickDelete(Number(feature.id))}
                                    className={styles.features_container_item_btns_wrapper_del}
                                    title="Удалить"
                                >
                                    <TrashBin className={styles.btn_delete} />
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className={styles.empty_state}>
                        <Text>Пока нет характеристик</Text>
                    </div>
                )}
            </div>
        </div>
    );
};