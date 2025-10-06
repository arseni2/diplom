"use client"
import styles from "./ClientFavorite.module.scss"
import {localStorageService} from "@/services/localStorage/LocalStorage";
import {House} from "@/gql/graphql";
import {HouseCard} from "@/widgets/houseCard/ui/HouseCard";
import {Xmark} from '@gravity-ui/icons';
import {useEffect, useState} from "react";


export const ClientFavorite = () => {
    const [houses, setHouses] = useState<House[] | null>(null);

    useEffect(() => {
        const savedHouses = localStorageService.getItem<House[]>("houses");
        setHouses(savedHouses || []);
    }, []);

    const handleRemoveClick = (house: House) => {
        localStorageService.deleteItem("houses", house)
        setHouses((prevState) => {
            return prevState ? prevState.filter((house) => house.id !== house.id) : prevState
        })
    }
    return (
        <div>
            {houses
                ?
                <div className={styles.grid}>
                    {houses.map((house, i) => (
                        <div key={i}>
                            <div className={styles.icon}>
                                <Xmark width={21} height={25} color={"red"} onClick={() => handleRemoveClick(house)}/>
                            </div>
                            <HouseCard {...house} />
                        </div>
                    ))}
                </div>
                :
                <div>пусто</div>
            }
        </div>
    );
};