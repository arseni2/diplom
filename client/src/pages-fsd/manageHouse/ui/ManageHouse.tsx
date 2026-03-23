"use client";
import styles from "./ManageHouse.module.scss";
import {Input} from "@/shared/ui/input/ui/Input";
import {Button, Select} from "@gravity-ui/uikit";
import Link from "next/link";
import {deleteHouseMutation, getHouseAllQuery} from "@/features/house/api/api";
import {useMutation, useQuery} from "@apollo/client/react";
import {GetHousesAllQuery} from "@/gql/graphql";
import {HouseCard} from "@/widgets/houseCard/ui/HouseCard";
import {Suspense, useMemo, useState} from "react";
import {TrashBin} from '@gravity-ui/icons';
import {HouseCardSkeleton} from "@/skeletons/houseCard/ui/HouseCardSkeleton";


const ManageHouse = () => {
    const {data, loading, error, refetch} = useQuery<GetHousesAllQuery>(getHouseAllQuery, {
        fetchPolicy: 'cache-and-network'
    });
    const [deleteHouse, {
        data: deletedHouse,
        loading: deleteHouseLoading,
        error: deleteHouseError
    }] = useMutation(deleteHouseMutation);
    const [searchQuery, setSearchQuery] = useState("");

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

    const handleClickDeleteHouse = (houseId: string) => {
        deleteHouse({
            variables: {
                id: Number(houseId)
            }
        }).then(() => {
            refetch()
        })
    }

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
                    {loading
                        ? <>
                            <HouseCardSkeleton />
                            <HouseCardSkeleton />
                            <HouseCardSkeleton />
                            <HouseCardSkeleton />
                        </>
                        : filteredHouses.length > 0 ? (
                            filteredHouses.map((item) =>
                                <div className={styles.containerBtn} key={item.id}>
                                    <Button
                                        loading={deleteHouseLoading}
                                        onClick={() => handleClickDeleteHouse(item.id)}
                                        className={styles.btnDel}
                                        view="outlined-danger" size="l">
                                        <TrashBin/>
                                    </Button>
                                    <Link className={styles.link} href={`/manage/houses/edit/${item.id}`} key={item.id}>
                                        <HouseCard {...item} />
                                    </Link>
                                </div>
                            )
                        ) : (
                            <div>Ничего не найдено</div>
                        )
                    }
            </div>
        </div>
    );
};

export default ManageHouse;