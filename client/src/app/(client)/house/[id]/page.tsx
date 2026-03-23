import HouseDetail from "@/pages-fsd/houseDetail/ui/HouseDetail";
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Недвижимость',
};
const Page = () => {
    return (
        <HouseDetail/>
    );
};

export default Page;