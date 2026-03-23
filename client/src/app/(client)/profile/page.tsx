import ClientProfile from "@/pages-fsd/clientProfile/ui/ClientProfile";
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Профиль',
};
const Page = () => {
    return (
        <ClientProfile />
    );
};

export default Page;