import ManageHouseCreate from "@/pages-fsd/manageHouseCreate/ui/ManageHouseCreate";
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Создание',
};
const Page = () => {
    return (
        <ManageHouseCreate />
    );
};

export default Page;