"use client"
import styles from "./ManageHouse.module.scss"
import {HouseCard} from "@/widgets/houseCard/ui/HouseCard";
import {Input} from "@/shared/ui/input/ui/Input";
import {Select} from "@gravity-ui/uikit";
import {ArrowUpArrowDown} from '@gravity-ui/icons';

export const ManageHouse = () => {
    return (
        <div className={styles.main_container}>
            <div className={styles.filter}>
                <div style={{ flex: 1 }}>
                    <Input placeholder={"Поиск"} style={{ width: '100%' }} />
                </div>
                <Select className={styles.filter_input} label={"Сортировка"}>
                    <Select.Option value={"test"} >etst</Select.Option>
                </Select>
            </div>

            <div className={styles.container}>
                <HouseCard/>
                <HouseCard/>
                <HouseCard/>
                <HouseCard/>
                <HouseCard/>
                <HouseCard/>
                <HouseCard/>
                <HouseCard/>
            </div>
        </div>
    );
};