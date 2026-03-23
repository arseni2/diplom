"use client"
import {HouseCard} from "@/widgets/houseCard/ui/HouseCard";
import styles from "./ClientHouses.module.scss"
import {filterHouseQuery} from "@/features/house/api/api";
import {useQuery} from "@apollo/client/react";
import {SearchFormValues, SearchHouseForm} from "@/widgets/searchHouseForm/ui/SearchHouseForm";
import {HousesFilterQuery, QueryHousesFilterArgs} from "@/gql/graphql";
import Link from "next/link"
import {HouseCardSkeleton} from "@/skeletons/houseCard/ui/HouseCardSkeleton";


type PropsType = {
    isRent?: boolean;
}
const ClientHouses = ({isRent}: PropsType) => {
    const {data, refetch, loading} = useQuery<HousesFilterQuery, QueryHousesFilterArgs>(filterHouseQuery, {
        variables: {
            isRent
        }
    })

    const handleSubmit = (formData: SearchFormValues) => {
        refetch({
            address: formData.address,
            minPrice: formData.minPrice,
            maxPrice: formData.maxPrice,
            isRent: isRent,
        });
    };

    const addresses = data?.housesFilter.map((item) => {
        return item.address
    })
    return (
        <div>
            <SearchHouseForm addresses={addresses} onSubmit={handleSubmit} isRent={isRent} />

            <div className={styles.container}>
                {loading
                    ? <>
                        <HouseCardSkeleton />
                        <HouseCardSkeleton />
                        <HouseCardSkeleton />
                        <HouseCardSkeleton />
                    </>
                    : data?.housesFilter.map((item, i) => (
                        <Link role={"link"} className={styles.container_link} href={`/house/${item.id}`} key={i}>
                            <HouseCard {...item} isRent={isRent}/>
                        </Link>
                    ))
                }
            </div>
        </div>
    );
};

export default ClientHouses;