import ClientRealtorPage from "@/pages-fsd/clientRealtorDetail/ui/ClientRealtorPage";
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Риелтор',
};
const Page = () => {
    return (
        <ClientRealtorPage />
    );
};

export default Page;