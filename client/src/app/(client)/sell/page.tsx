import {RealtorForm} from "@/widgets/realtorForm/ui/RealtorForm";
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Продажа',
};
const Page = () => {
    return (
        <RealtorForm/>
    );
};

export default Page