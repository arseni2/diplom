"use client"
import styles from "./ManageHouse.module.scss"
import {Input} from "@/shared/ui/input/ui/Input";
import {Button, Select} from "@gravity-ui/uikit";
import Link from "next/link";
import {getHouseAllQuery} from "@/features/house/api/api";
import {useQuery} from "@apollo/client/react";
import {GetHousesAllQuery} from "@/gql/graphql";
import {HouseCard} from "@/widgets/houseCard/ui/HouseCard";

export const ManageHouse = () => {
    const {data} = useQuery<GetHousesAllQuery>(getHouseAllQuery);
    return (
        <div className={styles.main_container}>
            <div className={styles.filter}>
                <div style={{flex: 1}}>
                    <Input placeholder={"Поиск"} style={{width: '100%'}}/>
                </div>
                <Select className={styles.filter_input} label={"Сортировка"}>
                    <Select.Option value={"test"}>etst</Select.Option>
                </Select>

                <Link href={"/manage/houses/create"}>
                    <Button view={"action"}>создать</Button>
                </Link>
            </div>

            <div className={styles.container}>
                {data?.housesAll.map((item, i) => (
                    <HouseCard {...item} key={i} />
                ))}
            </div>
        </div>
    );
};