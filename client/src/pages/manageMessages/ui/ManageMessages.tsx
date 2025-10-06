"use client";
import styles from "./ManageMessages.module.scss";
import {Button, Select, Text} from "@gravity-ui/uikit";
import {useMemo, useState} from "react";
import {Input} from "@/shared/ui/input/ui/Input";
import Link from "next/link";
import {useMutation, useQuery} from "@apollo/client/react";
import {getAppeals, updateAppealMutation} from "@/features/appeal/api/api";
import {Appeals, GetAppealsQuery, AppealsUpdateInput} from "@/gql/graphql";
import {formatDate, formatPrice, getFullName, getStatusColor, getStatusLabel} from "../utils/utils";




const AppealFilters = ({
                           search,
                           onSearchChange,
                           statusFilter,
                           onStatusFilterChange,
                       }: {
    search: string;
    onSearchChange: (value: string) => void;
    statusFilter: string;
    onStatusFilterChange: (value: string) => void;
}) => (
    <div className={styles.filters}>
        <Input
            placeholder="Поиск по клиенту, объекту, телефону..."
            value={search}
            onChange={(e) => onSearchChange(e.target.value)}
            style={{flex: 1}}
        />
        <Select
            placeholder="Статус"
            options={[
                {value: "all", content: "Все статусы"},
                {value: "Новая", content: "Новые"},
                {value: "В работе", content: "В работе"},
                {value: "Выполнено", content: "Завершённые"},
            ]}
            value={[statusFilter]}
            onUpdate={(nextValue) => onStatusFilterChange(nextValue[0] || "all")}
        />
    </div>
);

const AppealItem = ({
                        appeal,
                        isSelected,
                        onSelect,
                    }: {
    appeal: Appeals;
    isSelected: boolean;
    onSelect: () => void;
}) => (
    <div
        className={`${styles.requestItem} ${isSelected ? styles.selected : ""}`}
        onClick={onSelect}
    >
        <div className={styles.requestHeader}>
            <div className={`${styles.statusBadge} ${getStatusColor(appeal.status)}`}>
                {getStatusLabel(appeal.status)}
            </div>
        </div>

        <div className={styles.propertyInfo}>
            <Text className={styles.propertyTitle}>{appeal.house?.title}</Text>
            <Text color="secondary">
                {appeal.house?.address} • {formatPrice(Number(appeal.house?.price))}
            </Text>
        </div>

        <div className={styles.userInfo}>
            <Text>{getFullName(appeal.client)}</Text>
            <Text color="secondary">{formatDate(appeal.createdAt)}</Text>
        </div>
    </div>
);

const AppealsList = ({
                         appeals,
                         selectedId,
                         onSelect,
                     }: {
    appeals: Appeals[];
    selectedId: string | null;
    onSelect: (id: string) => void;
}) => {
    if (appeals.length === 0) {
        return (
            <div className={styles.emptyState}>
                <Text color="secondary">Нет заявок по вашему запросу</Text>
            </div>
        );
    }

    return (
        <div className={styles.requests}>
            {appeals.map((appeal) => (
                <AppealItem
                    key={appeal.id}
                    appeal={appeal}
                    isSelected={selectedId === appeal.id}
                    onSelect={() => onSelect(appeal.id)}
                />
            ))}
        </div>
    );
};

type UpdateAppealMutation = {
    updateAppeal: Appeals | null;
};

type UpdateAppealMutationVariables = {
    input: AppealsUpdateInput;
};
const AppealDetails = ({appeal}: { appeal: Appeals }) => {
    const [mutate] = useMutation<UpdateAppealMutation, UpdateAppealMutationVariables>(updateAppealMutation);
    return (
        <div className={styles.detailCard}>
            <div className={styles.section}>
                <Text variant="header-1" className={styles.sectionTitle}>
                    Объект недвижимости
                </Text>
                <div className={styles.card}>
                    <Link href={`/house/${appeal.house?.id}`} className={styles.propertyLink}>
                        <Text>{appeal.house?.title}</Text>
                    </Link>
                    <Text color="secondary">{appeal.house?.address}</Text>
                    <Text>{formatPrice(Number(appeal.house?.price))}</Text>
                    <Button
                        view="flat"
                        size="s"
                        as="a"
                        href={`/house/${appeal.house?.id}`}
                        style={{marginTop: "8px"}}
                    >
                        Посмотреть объект
                    </Button>
                </div>
            </div>

            <div className={styles.section}>
                <Text variant="header-1" className={styles.sectionTitle}>
                    Контакты клиента
                </Text>
                <div className={styles.card}>
                    <div className={styles.contactRow}>
                        <Text>Имя:</Text>
                        <Text>{getFullName(appeal.client)}</Text>
                    </div>
                    <div className={styles.contactRow}>
                        <Text>Телефон:</Text>
                        <a href={`tel:${appeal.client?.telephone}`} className={styles.link}>
                            {appeal.client?.telephone}
                        </a>
                    </div>
                    <div className={styles.contactRow}>
                        <Text>Email:</Text>
                        <a href={`mailto:${appeal.client?.email}`} className={styles.link}>
                            {appeal.client?.email}
                        </a>
                    </div>
                    <div className={styles.contactRow}>
                        <Text>Телеграмм:</Text>
                        <Text className={styles.link}>
                            {appeal.client?.tg}
                        </Text>
                    </div>
                </div>
            </div>

            <div className={styles.section}>
                <Text variant="header-1" className={styles.sectionTitle}>
                    Комментарий клиента
                </Text>
                <div className={styles.commentCard}>
                    <Text>{appeal.comment || "Без комментария"}</Text>
                </div>
            </div>

            <div className={styles.actions}>
                <Button
                    onClick={() => {
                        mutate({
                            variables: {
                                //@ts-ignore
                                id: Number(appeal.id),
                                input: {
                                    status: { set: "Отклонено" }
                                }
                            }
                        });
                    }}
                    view="outlined-danger" size="l">
                    Изменить статус "Отклонено"
                </Button>

                <Button
                    onClick={() => {
                        mutate({
                            variables: {
                                //@ts-ignore
                                id: Number(appeal.id),
                                input: {
                                    status: { set: "В работе" }
                                }
                            }
                        });
                    }}
                    view="outlined-action" size="l">
                    Изменить статус "В работе"
                </Button>

                <Button
                    onClick={() => {
                        mutate({
                            variables: {
                                //@ts-ignore
                                id: Number(appeal.id),
                                input: {
                                    status: { set: "Выполнено" }
                                }
                            }
                        });
                    }}
                    view="outlined-success" size="l">
                    Изменить статус "Выполнено"
                </Button>
            </div>
        </div>
    );
};

const EmptyDetail = () => (
    <div className={styles.emptyDetail}>
        <Text color="secondary">Выберите заявку для просмотра</Text>
    </div>
);


export const ManageMessages = () => {
    const {data, loading, error} = useQuery<{ appeals: GetAppealsQuery["appeals"] }>(getAppeals);
    const [selectedRequestId, setSelectedRequestId] = useState<string | null>(null);
    const [search, setSearch] = useState("");
    const [statusFilter, setStatusFilter] = useState<string>("all");

    const filteredAppeals = useMemo(() => {
        const appeals = data?.appeals || [];
        return appeals.filter((appeal) => {
            const matchesSearch =
                appeal?.house?.title.toLowerCase().includes(search.toLowerCase()) ||
                appeal?.client?.telephone?.includes(search) ||
                appeal?.client?.email.toLowerCase().includes(search.toLowerCase());

            const matchesStatus = statusFilter === "all" || appeal.status === statusFilter;
            return matchesSearch && matchesStatus;
        });
    }, [data?.appeals, search, statusFilter]);

    const selectedAppeal = useMemo(() => {
        return (data?.appeals || []).find((a) => a.id === selectedRequestId);
    }, [data?.appeals, selectedRequestId]);

    if (loading) return <div className={styles.container}><Text>Загрузка заявок...</Text></div>;
    if (error) return <div className={styles.container}><Text color="danger">Ошибка загрузки: {error.message}</Text>
    </div>;

    return (
        <div className={styles.container}>
            <AppealFilters
                search={search}
                onSearchChange={setSearch}
                statusFilter={statusFilter}
                onStatusFilterChange={setStatusFilter}
            />

            <div className={styles.content}>
                <div className={styles.requestList}>
                    <AppealsList
                        appeals={filteredAppeals as Appeals[]}
                        selectedId={selectedRequestId}
                        onSelect={setSelectedRequestId}
                    />
                </div>

                <div className={styles.detailContainer}>
                    {selectedAppeal ? <AppealDetails appeal={selectedAppeal as Appeals}/> : <EmptyDetail/>}
                </div>
            </div>
        </div>
    );
};