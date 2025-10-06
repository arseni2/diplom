"use client"
import styles from "./HouseDetail.module.scss"
import {Avatar, Button, Dialog, Text} from "@gravity-ui/uikit";
import {FileText, Globe, Hammer, Heart, LocationArrow, HeartFill, SquareDot} from '@gravity-ui/icons';
import Image from "next/image";
import {getHouseDetailQuery} from "@/features/house/api/api";
import {useQuery} from "@apollo/client/react";
import {GetHouseDetailQuery, House} from "@/gql/graphql";
import {useParams} from "next/navigation";
import Link from "next/link";
import {useEffect, useState} from "react";
import {Input} from "@/shared/ui/input/ui/Input";
import {useCreateAppeal} from "@/features/appeal/hooks/createAppeal";
import {useForm} from "react-hook-form";
import {localStorageService} from "@/services/localStorage/LocalStorage";

export const HouseDetail = () => {
    const [open, setOpen] = useState(false);
    const [isFill, setisFill] = useState<boolean>(false);
    const [houses, setHouses] = useState<House[] | null>(null);

    const params = useParams<{ id?: string }>();

    useEffect(() => {
        setHouses(localStorageService.getItem("houses"))
        const data = houses?.find((item) => item.id === params?.id);
        console.log(data)
        setisFill(data != undefined)
    }, [])

    const {data} = useQuery<GetHouseDetailQuery>(getHouseDetailQuery, {
        variables: {id: Number(params?.id)},
    })
    const icons = [
        {
            icon: <Globe className={styles.main_price_secondary}/>,
            title: "Окружение и атмосфера",
            desc: data?.house.bio
        },
        {
            icon: <SquareDot className={styles.main_price_secondary}/>,
            title: "Площадь",
            desc: data?.house.square
        },
        {
            icon: <Hammer className={styles.main_price_secondary}/>,
            title: "Ремонт",
            desc: data?.house.remont
        },
        {
            icon: <LocationArrow className={styles.main_price_secondary}/>,
            title: "Местоположение",
            desc: data?.house.address
        }
    ]

    const handleAddFavClick = () => {
        setisFill(true)
        localStorageService.setItem("houses", data?.house);
    }
    const handleDeleteFavClick = () => {
        setisFill(false)
        localStorageService.deleteItem("houses", data?.house);
    }
    return (
        <div>
            <div className={styles.header}>
                <div className={styles.header_title}>
                    <Text variant={"display-2"}>{data?.house.title}</Text>
                    <Text className={styles.header_title_desc}>{data?.house.address}</Text>
                </div>
                <DialogAppeal
                    realtorId={data?.house.realtorId || 1}
                    houseId={data?.house.id || ""}
                    open={open}
                    setOpen={setOpen}
                />
                <div className={styles.header_buttons}>
                    <Button
                        onClick={isFill ? handleDeleteFavClick : handleAddFavClick}
                        className={styles.header_buttons_btn}
                        size={"l"}
                        view={"outlined"}
                    >
                        {isFill ? <HeartFill/> : <Heart/>}
                        Favorite
                    </Button>
                </div>
            </div>

            <div className={styles.gallery}>
                <div>
                    {data?.house?.images?.[0]?.path ? (
                        <Image
                            className={styles.gallery_big}
                            src={data.house.images[0].path}
                            alt={data.house.title || "Изображение дома"}
                            layout="responsive"
                            width={100}
                            height={100}
                        />
                    ) : (
                        <div>Нет изображения</div>
                    )}
                </div>

                <div className={styles.gallery_min}>
                    {data?.house?.images?.[1]?.path && (
                        <Image
                            src={data.house.images[1].path}
                            alt="Изображение 2"
                            layout="responsive"
                            width={100}
                            height={100}
                        />
                    )}
                    {data?.house?.images?.[2]?.path && (
                        <Image
                            src={data.house.images[2].path}
                            alt="Изображение 3"
                            layout="responsive"
                            width={100}
                            height={100}
                        />
                    )}
                </div>
            </div>

            <div className={styles.main}>
                <div className={styles.main_content}>
                    <div className={styles.baseFeatures}>
                        {icons.map((item, i) => {
                            return <div key={i}>
                                <Text className={styles.main_price_secondary}>{item.title}</Text>
                                <div className={styles.baseFeatures_item}>
                                    {item.icon}
                                    <Text variant={"body-2"} className={styles.baseFeatures_value}>{item.desc}</Text>
                                </div>
                            </div>
                        })}
                    </div>

                    <div className={styles.main_desc}>
                        <Text variant={"header-1"}>О доме</Text>
                        <Text>{data?.house.description}</Text>
                    </div>

                    <RealtorCard
                        avatar={data?.house.realtor.avatar?.path || ""}
                        lastname={data?.house.realtor.lastname || ""}
                        firstname={data?.house.realtor.firstname || ""}
                        email={data?.house.realtor.email || ""}
                        id={data?.house.realtor.id || ""}
                    />

                    <Features features={data?.house.features || []}/>

                    <Map/>

                    <SimilarHouses/>
                </div>

                <div className={styles.main_price}>
                    <Text variant={"caption-2"} className={styles.main_price_secondary}>Цена</Text>

                    <div className={styles.main_price_container}>
                        <Text variant={"header-1"} className={styles.main_price_price}>{data?.house.price}₽</Text>
                        <Text className={styles.main_price_secondary}>/мес</Text>
                    </div>

                    <Button onClick={() => setOpen(true)} view={"action"} width={"max"} size={"l"}
                            className={styles.main_price_btn}>
                        <FileText/>
                        Подать заявку
                    </Button>
                </div>
            </div>
        </div>
    );
};

type PropsRealtorType = {
    avatar: string
    firstname: string
    lastname: string
    email: string
    id: string
}
export const RealtorCard = ({avatar, email, lastname, firstname, id}: PropsRealtorType) => {
    return (
        <div className={styles.realtor_container}>
            <Text className={styles.main_price_secondary}>Опубликовано риелтором</Text>

            <div className={styles.realtor_avatar_container}>
                <div className={styles.realtor_avatar}>
                    <Avatar
                        imgUrl={avatar}
                        view={'filled'}/>

                    <div className={styles.realtor_avatar_names}>
                        <Text className={styles.realtor_avatar_name}>{firstname} {lastname}</Text>
                        <Text className={styles.main_price_secondary}>{email}</Text>
                    </div>
                </div>

                <Link href={`/realtor/${id}`}>
                    <Button view={"action"}>Перейти в профиль</Button>
                </Link>
            </div>
        </div>
    )
}

type FeatureType = {
    title: string
    value: string
}
type PropsFeatureType = {
    features: FeatureType[]
}
const Features = ({features}: PropsFeatureType) => {
    return (
        <div>
            <Text variant={"header-1"}>Характеристики</Text>
            <div className={styles.features}>
                {features.map((feature, i) => (
                    <div key={i} className={styles.features_item}>
                        <Text className={styles.main_price_secondary}>{feature.title}</Text>
                        <div className={styles.divider}></div>
                        <Text className={styles.realtor_avatar_name}>{feature.value}</Text>
                    </div>
                ))}
            </div>
        </div>
    )
}

const Map = () => {
    return (
        <div>

        </div>
    )
}

const SimilarHouses = () => {
    return (
        <div>
            <Text variant={"header-1"}>Похожие</Text>
            <div className={styles.similar_container}>
                {/*<HouseCard/>*/}
                cards
            </div>
        </div>
    )
}

interface FormData {
    comment: string;
}

type PropsDialogType = {
    open: boolean
    setOpen: (open: boolean) => void
    houseId: string
    realtorId: number
}
const DialogAppeal = ({open, setOpen, houseId, realtorId}: PropsDialogType) => {
    const {result, mutate} = useCreateAppeal();
    const {
        register,
        handleSubmit,
        formState: {errors},
        reset,
    } = useForm<FormData>({
        defaultValues: {
            comment: "",
        },
    });

    const onSubmit = async (data: FormData) => {
        try {
            await mutate({
                variables: {
                    input: {
                        comment: data.comment,
                        house: {
                            connect: {
                                id: Number(houseId)
                            }
                        },
                        realtor: {
                            connect: {
                                id: realtorId
                            }
                        }
                    },
                },
            });

            reset();
            setOpen(false);
        } catch (error) {
            console.error("Ошибка отправки заявки:", error);
        }
    };

    return (
        <Dialog
            open={open}
            onClose={() => {
                reset();
                setOpen(false);
            }}
            disableOutsideClick={false}
            size="m"
            aria-labelledby="dialog-title"
        >
            <Dialog.Body>
                <Text variant="display-1">Заявка на дом</Text>

                <form onSubmit={handleSubmit(onSubmit)} className={styles.dialog_form}>
                    <Input
                        {...register("comment", {
                            required: "Комментарий обязателен",
                            maxLength: {value: 500, message: "Максимум 500 символов"},
                        })}
                        inputLabel="Комментарий"
                        placeholder="Напишите ваш комментарий..."
                        error={errors.comment?.message}
                    />

                    {result.typedError && (
                        <Text color="danger" className={styles.error}>
                            {result.typedError.errors.message || "Не удалось отправить заявку"}
                        </Text>
                    )}

                    <div className={styles.dialog_form_btns}>
                        <Button
                            view="outlined"
                            size="l"
                            onClick={() => {
                                reset();
                                setOpen(false);
                            }}
                        >
                            Отмена
                        </Button>
                        <Button
                            view="action"
                            size="l"
                            type="submit"
                            loading={result.loading}
                        >
                            Отправить
                        </Button>
                    </div>
                </form>
            </Dialog.Body>
        </Dialog>
    );
};