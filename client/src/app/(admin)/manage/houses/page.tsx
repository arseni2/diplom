import ManageHouse from "@/pages-fsd/manageHouse/ui/ManageHouse";
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Недвижимость',
};
const Page = () => {
    return (
        <ManageHouse />
    );
};

export default Page;