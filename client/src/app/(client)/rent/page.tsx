import ClientHouses from "@/pages-fsd/clientHouses/ui/ClientHouses";
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Аренда',
};
const Page = () => {
    return (
        <ClientHouses isRent />
    );
};

export default Page;