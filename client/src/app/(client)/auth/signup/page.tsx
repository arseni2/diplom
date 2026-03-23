import {RegisterForm} from "@/features/auth/ui/RegisterForm";
import { Metadata } from 'next';


export const metadata: Metadata = {
    title: 'Регистрация',
};
const Page = () => {
    return (
        <>
            <RegisterForm />
        </>
    );
};

export default Page;