"use client"
import styles from "./ClientFavorite.module.scss"
import {localStorageService} from "@/services/localStorage/LocalStorage";
import {House} from "@/gql/graphql";
import {HouseCard} from "@/widgets/houseCard/ui/HouseCard";
import {Xmark, Folder} from '@gravity-ui/icons';
import {useEffect, useState} from "react";
import {Text} from "@gravity-ui/uikit";


const ClientFavorite = () => {
    const [houses, setHouses] = useState<House[] | null>(null);

    useEffect(() => {
        const savedHouses = localStorageService.getItem<House[]>("houses");
        setHouses(savedHouses || []);
    }, []);

    const handleRemoveClick = (houseParam: House) => {
        localStorageService.deleteItem("houses", houseParam)
        setHouses((prevState) => {
            return prevState ? prevState.filter((house) => house.id !== houseParam.id) : prevState
        })
    }
    return (
        <div>
            {houses && houses.length > 0
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
                <div className={styles.empty}>
                    <Folder width={64} height={64} color="rgb(112 101 240 / 0.8)" />
                    <Text variant="body-2" color="secondary">
                        В избранном пока нет домов
                    </Text>
                </div>
            }
        </div>
    );
};

export default ClientFavorite;