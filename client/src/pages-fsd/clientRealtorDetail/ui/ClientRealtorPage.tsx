"use client"
import styles from "./ClientRealtorPage.module.scss"
import {useParams} from "next/navigation";
import {useQuery} from "@apollo/client/react";
import {getHousesByRealtorId} from "@/features/house/api/api";
import {GetHousesByRealtorIdQuery, QueryHousesRealtorArgs, QueryUserArgs, UserQuery} from "@/gql/graphql";
import {getRealtorById} from "@/features/users/api/api";
import {Avatar, Text} from "@gravity-ui/uikit";
import {HouseCard} from "@/widgets/houseCard/ui/HouseCard";


const ClientRealtorPage = () => {
    const params = useParams<{ id?: string }>();

    const {data: houses} = useQuery<GetHousesByRealtorIdQuery, QueryHousesRealtorArgs>(getHousesByRealtorId, {
        variables: {
            id: Number(params?.id),
        }
    })
    const {data: realtor} = useQuery<UserQuery, QueryUserArgs>(getRealtorById, {
        variables: {
            id: Number(params?.id),
        }
    })
    console.log(realtor?.user)
    return (
        <div className={styles.container}>
            <div className={styles.container_item}>
                <Text variant={'header-1'}>Данные о риелторе</Text>
                <div className={styles.realtor_container}>
                    <div className={styles.realtor_avatar_container}>
                        <div className={styles.realtor_avatar}>
                            <Avatar
                                imgUrl={realtor?.user.avatar?.path || ""}
                                view={'filled'}/>

                            <div className={styles.realtor_avatar_names}>
                                <Text className={styles.realtor_avatar_name}>{realtor?.user.firstname} {realtor?.user.lastname}</Text>
                                <Text className={styles.main_price_secondary}>{realtor?.user.email}</Text>
                            </div>
                        </div>
                    </div>

                    <div>
                        <Text>{realtor?.user.telephone}</Text>
                        <Text>{realtor?.user.tg}</Text>
                    </div>
                </div>
            </div>

            <div className={styles.container_item}>
                <Text variant={'header-1'}>Недвижимость</Text>

                <div className={styles.container_houses}>
                    {houses?.housesRealtor.map((item, i) => (
                        <HouseCard {...item} key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientRealtorPage;