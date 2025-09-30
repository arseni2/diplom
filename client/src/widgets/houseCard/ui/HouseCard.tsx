"use client";
import {Text} from "@gravity-ui/uikit";
import styles from "./HouseCard.module.scss";
import {Divider} from "@/shared/ui/divider/ui/Divider";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import {useRef, useState} from "react";
import {Star, Heart, HeartFill} from "@gravity-ui/icons";
import Image from "next/image";
import {GetHousesRentQuery} from "@/gql/graphql";
import {localStorageService} from "@/services/localStorage/LocalStorage";


type PropsType = {
    isRent?: boolean;
} & GetHousesRentQuery["housesRent"][0]
export const HouseCard = (props: PropsType) => {
    const swiperRef = useRef<any>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const [housesFav, setHousesFav] = useState(localStorageService.getItem<PropsType[]>("houses"))

    const isHouseInFav = housesFav ? housesFav.find((item) => {
        return item.id === props.id;
    }) : false

    const handleDotHover = (index: number) => {
        if (swiperRef.current) {
            swiperRef.current.slideTo(index);
            setActiveIndex(index);
        }
    };

    const handleClickAddFav = (house: PropsType) => {
        localStorageService.setItem("houses", house)
        setHousesFav((prevState) => prevState ? [...prevState, house] : [house])
    }
    const handleClickRemoveFav = (house: PropsType) => {
        localStorageService.deleteItem("houses", house)
        setHousesFav((prevState) => {
            return prevState ? prevState.filter((item) => item.id != house.id) : []
        })
    }

    return (
        <div className={styles.container}>
            <div className={styles.swiper_container}>
                <Swiper
                    modules={[]}
                    slidesPerView={1}
                    spaceBetween={0}
                    onSwiper={(swiper) => (swiperRef.current = swiper)}
                    onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
                >
                    {props.images?.map((file, i) => (
                        <SwiperSlide key={i}>
                            <Image
                                className={styles.container_img}
                                src={file.path}
                                layout="responsive"
                                width={100}
                                height={100}
                                alt={file.name || ""}
                                // unoptimized
                                style={{width: '100%', height: 'auto', objectFit: 'cover'}}
                            />
                        </SwiperSlide>
                    ))}

                    {/* Линейная пагинация */}
                    <div
                        className={styles.pagination}
                        onMouseMove={(e) => {
                            const rect = e.currentTarget.getBoundingClientRect();
                            const relativeX = e.clientX - rect.left;
                            const index = relativeX < rect.width / 2 ? 0 : 1;
                            handleDotHover(index);
                        }}
                    >
                        {[0, 1].map((index) => (
                            <div
                                key={index}
                                className={`${styles.line} ${activeIndex === index ? styles.active : ''}`}
                            />
                        ))}
                    </div>
                </Swiper>


            </div>

            <div className={styles.container_card}>
                <div className={styles.popular_badge}>
                    <Star width={15}/>
                    <Text variant="caption-2">Популярный</Text>
                </div>
                <div className={styles.container_text}>
                    <div className={styles.container_text_container}>
                        {props.isRent ?
                            (
                                <div>
                                    <Text variant={"header-1"}
                                          className={styles.container_text_price}>{props.price}₽</Text>
                                    <Text variant={"header-1"} className={styles.container_text_secondary}>/мес</Text>
                                </div>
                            )
                            :
                            <Text variant={"header-1"} className={styles.container_text_price}>{props.price}₽</Text>
                        }
                        {isHouseInFav
                            ? <HeartFill onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                handleClickRemoveFav(props)
                            }} color={"primary"} width={20} height={20}/>
                            : <Heart onClick={(e) => {
                                e.preventDefault()
                                e.stopPropagation()
                                handleClickAddFav(props)
                            }} color={"primary"} width={20} height={20}/>
                        }

                    </div>

                    <Text variant={"header-1"} color={"dark-primary"}>{props.title}</Text>
                    <Text variant={"body-1"} className={styles.container_text_secondary}>{props.address}</Text>
                </div>

                <Divider/>

                <div className={styles.container_icons}>
                    <div className={styles.container_icons_item}>
                        <Text>{props.square} м<sup>2</sup></Text>
                    </div>

                    <div className={styles.container_icons_item}>
                        <Text>{props.floor}</Text>
                    </div>

                    <div className={styles.container_icons_item}>
                        <Text>{props.rooms}</Text>
                    </div>
                </div>
            </div>
        </div>
    )
        ;
};