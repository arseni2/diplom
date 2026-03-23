"use client";

import {useState} from "react";
import {Map, Placemark, YMaps} from "@pbe/react-yandex-maps";
import {Text} from "@gravity-ui/uikit";
import styles from "./YMapPicker.module.scss";

type Props = {
    defaultLat?: number | null;
    defaultLng?: number | null;
    onChange: (lat: number, lng: number) => void;
};

export const YMapPicker = ({defaultLat, defaultLng, onChange}: Props) => {
    const [point, setPoint] = useState<[number, number] | null>(
        defaultLat && defaultLng ? [defaultLat, defaultLng] : null
    );

    const mapState = {
        center: point || [55.751574, 37.573856],
        zoom: 10,
    };

    const handleClick = (e: any) => {
        const coords = e.get("coords") as [number, number];
        setPoint(coords);
        onChange(coords[0], coords[1]);
    };

    return (
        <div className={styles.mapBlock}>
            <Text variant="body-2">Кликните на карте, чтобы выбрать местоположение</Text>
            <div className={styles.mapWrap}>
                <YMaps
                    query={{
                        apikey: process.env.NEXT_PUBLIC_YANDEX_MAP_KEY!,
                    }}
                >
                    <Map
                        width="100%"
                        height="100%"
                        defaultState={mapState}
                        onClick={handleClick}
                    >
                        {point && <Placemark geometry={point}/>}
                    </Map>
                </YMaps>
            </div>
        </div>
    );
};