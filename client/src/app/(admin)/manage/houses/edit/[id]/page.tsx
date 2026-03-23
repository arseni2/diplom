import ManageHouseCreate from "@/pages-fsd/manageHouseCreate/ui/ManageHouseCreate";
import { Metadata } from 'next';


type PropsType = {
    params: Promise<{ id: string }>
}

export const metadata: Metadata = {
    title: 'Редактирование',
};
const Page = async (props: PropsType) => {
    const { id } = await props.params

    return (
        <ManageHouseCreate houseId={Number(id)}/>
    );
};

export default Page;