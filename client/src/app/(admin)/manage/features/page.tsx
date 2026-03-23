import ManageFeatures from "@/pages-fsd/manageFeatures/ui/ManageFeatures";
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Характеристики',
};
const Page = () => {
    return (
        <ManageFeatures/>
    );
};

export default Page;