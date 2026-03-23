import ManageMessages from "@/pages-fsd/manageMessages/ui/ManageMessages";
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Заявки',
};
const Page = () => {
    return (
        <ManageMessages />
    );
};

export default Page;