"use client"
import {HouseCard} from "@/widgets/houseCard/ui/HouseCard";
import styles from "./ClientHouses.module.scss"
import {getHouseRentQuery} from "@/features/house/api/api";
import {useQuery} from "@apollo/client/react";
import {SearchHouseForm} from "@/widgets/searchHouseForm/ui/SearchHouseForm";
import {GetHousesRentQuery} from "@/gql/graphql";
import Link from "next/link";


type PropsType = {
    isRent?: boolean;
}
export const ClientHouses = ({isRent}: PropsType) => {
    const {data} = useQuery<GetHousesRentQuery>(getHouseRentQuery)
    return (
        <div>
            <SearchHouseForm/>

            <div className={styles.container}>
                {data?.housesRent.map((item, i) => (
                    <Link className={styles.container_link} href={`/house/${item.id}`} key={i}>
                        <HouseCard isRent {...item}/>
                    </Link>
                ))}
            </div>
        </div>
    );
};