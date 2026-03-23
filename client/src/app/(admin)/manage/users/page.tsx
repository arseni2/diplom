import ManageUsers from "@/pages-fsd/manageUsers/ui/ManageUsers";
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Пользователь',
};
const Page = () => {
    return (
        <ManageUsers/>
    );
};

export default Page;