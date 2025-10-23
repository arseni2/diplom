"use client";
import styles from "./ManageHouse.module.scss";
import {Input} from "@/shared/ui/input/ui/Input";
import {Button, Select} from "@gravity-ui/uikit";
import Link from "next/link";
import {getHouseAllQuery} from "@/features/house/api/api";
import {useQuery} from "@apollo/client/react";
import {GetHousesAllQuery} from "@/gql/graphql";
import {HouseCard} from "@/widgets/houseCard/ui/HouseCard";
import {useState, useMemo} from "react";

export const ManageHouse = () => {
    const {data, loading, error} = useQuery<GetHousesAllQuery>(getHouseAllQuery);
    const [searchQuery, setSearchQuery] = useState("");

    // Фильтрация домов на основе поискового запроса
    const filteredHouses = useMemo(() => {
        if (!data?.housesAll || !searchQuery.trim()) {
            return data?.housesAll || [];
        }

        const query = searchQuery.toLowerCase().trim();

        return data.housesAll.filter((house) => {
            return (
                house.title.toLowerCase().includes(query) ||
                house.address.toLowerCase().includes(query) ||
                house.description.toLowerCase().includes(query) ||
                house.square.toLowerCase().includes(query) ||
                house.remont.toLowerCase().includes(query) ||
                house.rooms?.toLowerCase().includes(query) ||
                house.floor?.toLowerCase().includes(query)
            );
        });
    }, [data?.housesAll, searchQuery]);

    if (loading) return <div>Загрузка...</div>;
    if (error) return <div>Ошибка: {error.message}</div>;

    return (
        <div className={styles.main_container}>
            <div className={styles.filter}>
                <div style={{flex: 1}}>
                    <Input
                        placeholder={"Поиск по названию, адресу, описанию и др."}
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        style={{width: "100%"}}
                    />
                </div>
                <Select className={styles.filter_input} label={"Сортировка"}>
                    <Select.Option value={"test"}>Тест</Select.Option>
                </Select>

                <Link href={"/manage/houses/create"}>
                    <Button view={"action"}>Создать</Button>
                </Link>
            </div>

            <div className={styles.container}>
                {filteredHouses.length > 0 ? (
                    filteredHouses.map((item) =>
                        <Link className={styles.link} href={`/manage/houses/edit/${item.id}`} key={item.id}>
                            <HouseCard {...item} />
                        </Link>
                    )
                ) : (
                    <div>Ничего не найдено</div>
                )}
            </div>
        </div>
    );
};