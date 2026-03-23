import ClientHouses from "@/pages-fsd/clientHouses/ui/ClientHouses";
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Покупка',
};
const Page = () => {
    return (
        <ClientHouses />
    );
};

export default Page;