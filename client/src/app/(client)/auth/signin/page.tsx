import {LoginForm} from "@/features/auth/ui/LoginForm";
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Вход',
};
const Page = () => {
    return (
        <>
           <LoginForm />
        </>
    );
};

export default Page