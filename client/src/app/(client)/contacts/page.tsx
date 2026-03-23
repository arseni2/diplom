import ClientContacts from "@/pages-fsd/clientContacts/ui/ClientContacts";
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Контакты',
};
const Page = () => {
    return (
        <ClientContacts/>
    );
};

export default Page;