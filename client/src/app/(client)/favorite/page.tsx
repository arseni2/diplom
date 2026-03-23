import ClientFavorite from "@/pages-fsd/clientFavorite/ui/ClientFavorite";
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Избранные',
};
const Page = () => {
    return (
        <ClientFavorite />
    );
};

export default Page;