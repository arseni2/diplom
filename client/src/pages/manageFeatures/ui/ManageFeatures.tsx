"use client";
import styles from "./ManageFeatures.module.scss";
import { Input } from "@/shared/ui/input/ui/Input";
import { Button, Select, Text } from "@gravity-ui/uikit";
import { Pencil, TrashBin } from '@gravity-ui/icons';
import { useState } from 'react';
import { CreateFeatureForm } from "@/features/feature/ui/CreateFeatureForm";
import { useGetFeatures } from "@/features/feature/hooks/useQueryFeatures";
import { useDeleteFeature } from "@/features/feature/hooks/useDeleteFeature";
import { toaster } from "@gravity-ui/uikit/toaster-singleton";

type SortField = 'title' | 'value';

export const ManageFeatures = () => {
    const { data, loading, error, refetch } = useGetFeatures();
    const { mutate: deleteFeatureMutation } = useDeleteFeature();

    const [search, setSearch] = useState("");
    const [sortField, setSortField] = useState<SortField[]>(['title']);
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

    // Фильтрация и сортировка на фронтенде
    const processedFeatures = data?.features
        ? data.features
            .filter((feature) =>
                feature.title.toLowerCase().includes(search.toLowerCase()) ||
                feature.value.toLowerCase().includes(search.toLowerCase())
            )
            .sort((a, b) => a[sortField[0]].localeCompare(b[sortField[0]]))
        : [];

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
                <Select
                    className={styles.filter_input}
                    label="Сортировка"
                    multiple={false}
                    value={sortField}
                    onUpdate={(value) => setSortField(value as SortField[])}
                >
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
                        <Button view="action" onClick={handleCloseForm} size="s">
                            Отмена
                        </Button>
                    </div>
                </div>
            )}

            {!editingFeature && (
                <div className={styles.createFormWrapper}>
                    <CreateFeatureForm refetch={refetch} />
                </div>
            )}

            <div className={styles.features_container}>
                {processedFeatures.length > 0 ? (
                    processedFeatures.map((feature) => (
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
                                    onClick={() =>
                                        handleEditClick({
                                            ...feature,
                                            id: Number(feature.id),
                                        })
                                    }
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
                ) : search ? (
                    <div className={styles.empty_state}>
                        <Text>Ничего не найдено</Text>
                    </div>
                ) : (
                    <div className={styles.empty_state}>
                        <Text>Пока нет характеристик</Text>
                    </div>
                )}
            </div>
        </div>
    );
};